# Website Frontend Documentation

This is the **Sparkfest 2025** website repository project for the tech community.

---

## 📌 Table of Contents

- [Website Frontend Documentation](#website-frontend-documentation)
  - [📌 Table of Contents](#-table-of-contents)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
  - [💁 Project Structure](#-project-structure)
  - [Issue & Project Workflow](#issue--project-workflow)
    - [1. Find an Issue](#1-find-an-issue)
    - [2. Create a Branch](#2-create-a-branch)
    - [3. Submit a Pull Request (PR)](#3-submit-a-pull-request-pr)
    - [4. Code Review & Merge](#4-code-review--merge)
  - [Branching & Git Workflow](#branching--git-workflow)
    - [Branch Naming Convention](#branch-naming-convention)
      - [1. Switch to develop branch](#1-switch-to-develop-branch)
      - [2. Create a feature branch linked to an issue](#2-create-a-feature-branch-linked-to-an-issue)
      - [3. Make your changes in the code](#3-make-your-changes-in-the-code)
      - [4. Once you're done with your changes, commit](#4-once-youre-done-with-your-changes-commit)
      - [5. Push to remote branch](#5-push-to-remote-branch)
      - [6. Create a pull request (PR)](#6-create-a-pull-request-pr)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Message Format](#commit-message-format)
    - [Allowed Commit Types](#allowed-commit-types)
      - [Examples](#examples)
  - [📋 Pull Request Guidelines](#-pull-request-guidelines)
    - [PR Title Format:](#pr-title-format)
    - [PR Description Template](#pr-description-template)

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/-React-555555?style=for-the-badge&logo=react)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-555555?style=for-the-badge&logo=TailwindCSS)&nbsp;
![ShadcnUI](https://img.shields.io/badge/-ShadcnUI-555555?style=for-the-badge&logo=shadcnUI)&nbsp;
![MagicUI](https://img.shields.io/badge/-MagicUI-555555?style=for-the-badge&logo=MagicUI)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-555555?style=for-the-badge&logo=typescript)&nbsp;

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) or npm

1. Create a new folder where you can store the project files, referred to as the **Project Folder**.

2. Open the command prompt and navigate to the **Project Folder**.

```bash
cd <PATH TO PROJECT FOLDER>
```

3. Clone the repository, adding `.` at the end to extract files to the current directory.

```bash
git clone https://github.com/Google-DSC-PUP/sparkfest-2025.git .
```

4. Install dependencies

```bash
npm install
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 💁 Project Structure

```
📦 sparkfest-2025
├── 📂 node_modules
├── 📂 public              # Static assets
├── 📂 src
│   ├── 📂 assets          # Images, icons, and other assets
│   ├── 📂 components      # Reusable UI components
│   │   ├── 📂 features   # Feature-specific components
│   │   ├── 📂 ui         # Generic, reusable UI components
│   ├── 📂 lib            # Utility functions and helpers
├── .gitignore
├── package.json
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── App.css
├── App.tsx                # Main application entry point
```

---

## Issue & Project Workflow

We use **GitHub Projects** to manage tasks and issues. Follow these steps when working on issues:

#### 1. Find an Issue

- Go to the [GitHub Issues](https://github.com/Google-DSC-PUP/sparkfest-2025/issues) page.
- Assign the issue to yourself.
- Move the issue to "In Progress" in the project board.

#### 2. Create a Branch

- Use the [branching convention](#branching--git-workflow).
- Start coding!

#### 3. Submit a Pull Request (PR)

- Reference the issue in the PR description (e.g., `Closes #123`).
- Move the issue to "Review" in the project board.

#### 4. Code Review & Merge

- Once approved, the PR gets merged into `develop`.
- The issue is moved to "Done."

---

## Branching & Git Workflow

### Branch Naming Convention

| Branch Type | Naming Convention               | Example                 |
| ----------- | ------------------------------- | ----------------------- |
| **Main**    | `main`                          | `main`                  |
| **Dev**     | `dev`                           | `dev`                   |
| **Feature** | `feature/ISSUE-ID-feature-name` | `feature/123-add-auth`  |
| **Bugfix**  | `bugfix/ISSUE-ID-issue-name`    | `bugfix/234-fix-footer` |

---

## 📋 Pull Request Guidelines

### PR Title Format:

```
<type>(<scope>): <short description>
```

Example:

```
feat(auth): add user login functionality
fix(navbar): resolve mobile responsiveness issue
```

### PR Description Template

```
✨ What’s New?
- [x] Briefly explain what was added

📷 Screenshots of website (IMPORTANT)
_Add relevant screenshots/gifs_

🔗 Related Issues
Closes #ISSUE_NUMBER

✅ Checklist (from issue)
- [ ] Code follows project conventions
- [ ] Linted & formatted
- [ ] Tested locally
```
