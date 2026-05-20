<p align="center">
  <img src="public/favicon.png" alt="Quizzical Logo" width="240" />
</p>

<h1 align="center">Quizzical</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff" alt="CSS Badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License Badge" />
</p>

<p align="center">
  A simple React trivia quiz app built with Vite and Open Trivia DB.
</p>

<p align="center">
  <a href="https://quizzical-two-pi.vercel.app/"><strong>Live Demo</strong></a>
  ·
  <a href="https://github.com/Ash-the-k/Quizzical"><strong>Repository</strong></a>
  ·
  <a href="https://github.com/Ash-the-k/Quizzical/blob/main/LICENSE"><strong>License</strong></a>
</p>

---

## Overview

**Quizzical** is a multiple-choice trivia quiz app built with React.

Users can start a quiz, answer 5 questions, check their answers, view their score, and play again with a new set of questions.

Questions are fetched from the Open Trivia DB API each time a new quiz starts.

---

## Features

- **API-powered quiz flow:** Fetches fresh multiple-choice questions from Open Trivia DB.
- **Clean answer handling:** Allows one selected answer per question and locks selections after checking.
- **Instant result feedback:** Highlights correct answers, marks wrong selected answers, and mutes the remaining options.
- **Score and replay system:** Shows the final score and lets users start a new quiz immediately.
- **Loading experience:** Displays a loading screen while the quiz questions are being prepared.
- **Readable question data:** Decodes HTML entities from API responses for cleaner question and option text.
- **Randomized options:** Shuffles answer choices so the correct answer does not always appear in the same position.
- **Responsive interface:** Adjusted layouts for desktop and mobile, including compact quiz footer behavior.

---

## Tech Stack

| Category            | Technology       |
| ------------------- | ---------------- |
| Frontend            | React            |
| Build Tool          | Vite             |
| Language            | JavaScript       |
| Styling             | CSS              |
| API                 | Open Trivia DB   |
| HTML Decoding       | `he`             |
| Conditional Classes | `clsx`           |
| Loading Indicator   | `react-spinners` |
| Deployment          | Vercel           |

---

## Architecture Note

Quizzical keeps the UI simple by preparing the quiz data before it reaches the components.

Instead of rendering the Open Trivia DB response directly, the app first transforms each question into a cleaner structure with:

- a question ID
- decoded question text
- shuffled answer options
- option IDs
- selected states
- a reference to the correct option

This makes the rest of the app easier to handle because the components do not need to worry about raw API formatting.

<div align="center">
<pre>
Open Trivia DB API
↓
getQuizQuestions()
↓
decodeHtml() + shuffleArray()
↓
React State
↓
Quiz → Question → Option
↓
Check Answers → Show Score
</pre>
</div>

This small data-preparation step keeps the quiz logic predictable while still keeping the project lightweight.

---

## Project Structure

```
Quizzical/
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── public
│   ├── favicon.png
│   └── og-image.png
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── api
│   │   └── getQuizQuestions.js
│   ├── components
│   │   ├── Landing.jsx
│   │   ├── Option.jsx
│   │   ├── Question.jsx
│   │   └── Quiz.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utils
│       ├── decodeHtml.js
│       └── shuffleArray.js
└── vite.config.js
```

---

## Run Locally

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes bundled with Node)

1. Clone the repository and navigate into the project directory:
    ```bash
    git clone https://github.com/Ash-the-k/Quizzical.git
    cd Quizzical
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Spin up the local development server:
   ```bash
   npm run dev
   ```

---

## Production Build
To compile the application into optimized, static assets for deployment, or to preview the production build locally:


```bash
# Create a production build (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

This project is deployed on Vercel.

[View Live Site](https://quizzical-two-pi.vercel.app/)

---

## Credits

- Built as part of the [Scrimba React course](https://scrimba.com/learn-react-c0e).
- Trivia questions are provided by [Open Trivia DB](https://opentdb.com/).
- Deployed using [Vercel](https://vercel.com/).

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Author

Built by **Ashlesh Kanchan**.

- GitHub: [Ash-the-k](https://github.com/Ash-the-k)
- LinkedIn: [Ashlesh Kanchan](https://www.linkedin.com/in/ashlesh-kanchan/)
