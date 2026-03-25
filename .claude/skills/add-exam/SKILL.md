---
description: Add a new rheumatology exam to the Georgia quiz app from a markdown file and optionally extract images from its PDF.
user-invocable: true
argument-hint: <path-to-markdown> [--pdf <path-to-pdf>]
---

# Add Exam to Georgia App

Add a new exam to the Georgia quiz app by parsing a markdown file into the app's JSON format, optionally extracting clinical images from the corresponding PDF, and registering the exam in the catalog.

## Input

The user provides:
- **Markdown file** (required): Path to a `.md` file with the parsed exam questions. The format uses `---` separators between questions, with `Posição: N`, options `A.`-`D.`, `Resposta correta` marker before the correct option, and `Explicação:` section.
- **PDF file** (optional): Path to the original exam PDF containing embedded clinical images (X-rays, lab tables, MRI/CT scans, etc.). If provided, images will be extracted and mapped to questions.

If the user provides only one path, infer the type from the extension. If a PDF exists in the same directory as the markdown, ask whether to extract images from it.

## Exam ID Convention

Derive the exam ID from the filename. Examples:
- `ester-2025.md` → ID: `ester-2025`, title: `ESTER 2025`
- `ester-2023.md` → ID: `ester-2023`, title: `ESTER 2023`

All IDs must be lowercase, kebab-case. The title is the uppercased version.

## Phase 1: Parse Markdown → JSON

Parse the markdown file into `exams/<exam-id>.json` following this schema:

```json
[
  {
    "pos": 1,
    "anulado": false,
    "enunciado": "Question text here...",
    "opcoes": {
      "A": "Option A text",
      "B": "Option B text",
      "C": "Option C text",
      "D": "Option D text"
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Explanation...\n\n**Por que as outras estão erradas:**\n- **A.** Reason...\n- **C.** Reason...\n- **D.** Reason...",
    "imagens": []
  }
]
```

### Parsing rules

1. Split the markdown by `---` separators into question blocks.
2. Extract `Posição: N` for the question number (`pos`).
3. If the block contains "Item Anulado", set `anulado: true` with empty fields.
4. The **correct answer** is identified by `Resposta correta` appearing on the line **before** the correct option letter.
5. Options are lines starting with `A.`, `B.`, `C.`, `D.` (may also use `A -`, `B -`, etc.).
6. The **enunciado** is everything from after the `Tipo de Item:` line until the first option, with `Resposta correta` markers removed. Normalize whitespace to single spaces.
7. The **explicacao** section starts after `Explicação:`. Format it with:
   - Bold correct answer: `**Resposta correta: X.**` followed by the main explanation.
   - Wrong answer explanations under `**Por que as outras estão erradas:**` with `- **X.** reason` bullets.
8. All questions get `"imagens": []` initially.

### Validation

After parsing, verify:
- All 100 questions are present (or whatever count exists).
- Every non-anulado question has exactly 4 options and a correct answer.
- Print a summary: total questions, questions with correct answers, annulled count.

## Phase 2: Extract Images from PDF (if provided)

### Step 1: Extract all images

```bash
pdfimages -j "<pdf-path>" /tmp/georgia-<exam-id>-images/img
```

Requires `poppler` (pdfimages, pdftotext) to be installed.

### Step 2: Filter clinical images

Use `pdfimages -list` to get image metadata. **Exclude** decorative/structural images:
- Logo images (small, repeated on every page, e.g. 200x42)
- `smask` type images (transparency masks)
- Answer key pages (usually the last few pages with large uniform gray images)

Keep images with unique dimensions that are actual clinical content (X-rays, tables, charts, photos).

### Step 3: Map images to questions

The most reliable approach: **match question enunciado text against PDF page text**.

1. Extract text from each PDF page using `pdftotext -f <page> -l <page>`.
2. For each parsed question, search for a distinctive substring of its enunciado (first 30+ chars, normalized) in each page's text.
3. Build a `page → [question numbers]` mapping.
4. Assign each clinical image to the first question on its page. If the page has no questions, assign to the last question from the nearest prior page.

**Do NOT rely on standalone numbers in the PDF** — different exams have different layouts (some use "Posição: N", others put numbers in margins, etc.). Text matching is the robust approach.

### Step 4: Save images

```
exams/images/<exam-id>/q<pos>_img<n>.jpg
```

- Convert PPM/PBM files to JPEG using `sips -s format jpeg`.
- Multiple images per question get sequential suffixes: `q5_img1.jpg`, `q5_img2.jpg`.

### Step 5: Update JSON with image references

Add relative paths to each question's `imagens` array:

```json
"imagens": ["images/<exam-id>/q5_img1.jpg", "images/<exam-id>/q5_img2.jpg"]
```

### Step 6: Verify images

Spot-check 2-3 images by reading them to confirm:
- The image content matches the question subject (e.g., shoulder X-ray for a shoulder question).
- No decorative/blank images were included.

## Phase 3: Register in Catalog

Add the new exam to `exams/index.json`:

```json
{
  "id": "<exam-id>",
  "title": "<EXAM TITLE>",
  "subtitle": "Exame de Suficiência para Título de Especialista em Reumatologia — Prova Teórica",
  "date": "<year or date>",
  "questions": <count>,
  "file": "exams/<exam-id>.json"
}
```

## Phase 4: Cleanup

- Remove temporary files from `/tmp/georgia-*`.
- Print final summary:
  - Total questions parsed
  - Questions with images (if PDF was provided)
  - Total image files extracted
  - Path to the JSON file

## Important Notes

- The app code (`app.js`, `style.css`, `index.html`) already supports images — no app code changes are needed.
- Images are rendered after the enunciado text with click-to-zoom lightbox.
- The `exams/` path prefix is added by `app.js` at render time, so JSON paths should be relative to `exams/` (e.g., `images/ester-2025/q2_img1.jpg`).
- Always use `ensure_ascii=False` when writing JSON to preserve Portuguese characters.
