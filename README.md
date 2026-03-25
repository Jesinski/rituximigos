# Rheumatology Exams

Interactive rheumatology exam simulator with instant grading and detailed explanations.

## Requirements

- [Node.js](https://nodejs.org/) (any recent version)

## Running locally

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new exam

1. Create a JSON file in `exams/` following the existing format (see `exams/ester-2025.json` as reference):

```json
[
  {
    "pos": 1,
    "anulado": false,
    "enunciado": "Question text...",
    "opcoes": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "correta": "B",
    "explicacao": "Explanation..."
  }
]
```

2. Add an entry to `exams/index.json`:

```json
{
  "id": "my-exam-2025",
  "title": "My Exam 2025",
  "subtitle": "Exam description",
  "date": "01/01/2025",
  "questions": 50,
  "file": "exams/my-exam-2025.json"
}
```

## Project structure

```
├── index.html          # Main page
├── app.js              # Quiz logic
├── style.css           # Styles
├── server.js           # Local dev server (Node.js, zero dependencies)
└── exams/
    ├── index.json      # Exam catalog
    └── ester-2025.json # ESTER 2025 exam
```
