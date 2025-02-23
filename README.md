# Mahfuj Ahmed - UI Garden

## Overview
This is a React-based component library built using Vite, Storybook, and Docker.

## Prerequisites
- Node.js (v16 or higher)
- Docker

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mahfuj_ahmed_ui_garden
Install dependencies:

bash
Copy
npm install
Run Storybook:

bash
Copy
npm run storybook
Build and run the Docker container:

bash
Copy
docker build -t mahfuj_ahmed_coding_assignment12 .
docker run -d -p 8083:80 --name mahfuj_ahmed_coding_assignment12 mahfuj_ahmed_coding_assignment12
Access the Application
Storybook: Open http://localhost:6006 in your browser.

Production Build: Open http://localhost:8083 in your browser.

Copy
Add Comments to Code:
Ensure your code is well-documented with comments explaining the purpose of each component and function.

Step 5: Push to GitHub
Initialize Git Repository (if not already done):

bash
Copy
git init
git add .
git commit -m "Initial commit"
Create a GitHub Repository:

Go to GitHub and create a new repository.

Follow the instructions to push your local repository to GitHub:

bash
Copy
git remote add origin <repository-url>
git branch -M main
git push -u origin main
Step 6: Submit Your Assignment
Submit via LEARN Dropbox:

Upload the following files:

Dockerfile

README.md

Provide the link to your GitHub repository.

Verify Submission:

Double-check that all files are included and the GitHub repository is accessible.

Optional: Additional Enhancements
Add More Tests:

Write additional tests to cover edge cases and improve test coverage.

Add Storybook Addons:

Install and configure additional Storybook addons (e.g., @storybook/addon-a11y for accessibility testing).

Deploy to a Hosting Service:

Deploy your Storybook or production build to a hosting service like Vercel, Netlify, or GitHub Pages.

By following these steps, you’ll complete your assignment and ensure your component library is fully functional, tested, and ready for submission. Good luck! 🚀

write a detail readme file for me.
Here’s a detailed README.md file tailored for your Web Component Library assignment. This file includes all the necessary information for setting up, running, and testing your project.

markdown
Copy
# Mahfuj Ahmed - UI Garden

## Overview
This project is a **Web Component Library** built using **React**, **Vite**, **Storybook**, and **Docker**. It includes a collection of reusable UI components such as Button, Label, Table, Dropdown, and more. Each component is fully responsive, tested, and documented in Storybook.

The project is containerized using Docker and can be run locally on `localhost:8083`.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
   - [Running Storybook](#running-storybook)
   - [Running Tests](#running-tests)
   - [Building the Project](#building-the-project)
4. [Docker Setup](#docker-setup)
5. [Accessing the Application](#accessing-the-application)
6. [Project Structure](#project-structure)
7. [Component List](#component-list)
8. [Testing](#testing)
9. [Contributing](#contributing)
10. [License](#license)

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Docker** (for containerization)

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mahfuj_ahmed_ui_garden
Install dependencies:

bash
Copy
npm install
Running the Project
Running Storybook
To view and interact with the components in Storybook:

bash
Copy
npm run storybook
Open http://localhost:6006 in your browser.

Use the Controls panel in Storybook to modify component properties (e.g., text, background color, disabled state).

Running Tests
To run unit tests for all components:

bash
Copy
npm test
This will execute all test files (*.tests.tsx) and display the results in the terminal.

Building the Project
To create a production build of the React app:

bash
Copy
npm run build
The production files will be generated in the dist folder.

Docker Setup
The project is containerized using Docker. Follow these steps to build and run the Docker container:

Build the Docker image:

bash
Copy
docker build -t mahfuj_ahmed_coding_assignment12 .
Run the Docker container:

bash
Copy
docker run -d -p 8083:80 --name mahfuj_ahmed_coding_assignment12 mahfuj_ahmed_coding_assignment12
Accessing the Application
Storybook: Open http://localhost:6006 in your browser.

Production Build: Open http://localhost:8083 in your browser.

Project Structure
The project is organized as follows:

Copy
mahfuj_ahmed_ui_garden/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.tests.tsx
│   │   │   └── index.ts
│   │   ├── Label/
│   │   │   ├── Label.tsx
│   │   │   ├── Label.stories.tsx
│   │   │   ├── Label.types.ts
│   │   │   ├── Label.tests.tsx
│   │   │   └── index.ts
│   │   └── ... (other components)
├── .storybook/            # Storybook configuration
├── public/                # Static assets
├── dist/                  # Production build
├── Dockerfile             # Docker configuration
├── README.md              # Project documentation
└── package.json           # Project dependencies
Component List
The library includes the following components:

Button

Label

Text

Table

Table Header

Table Row

Table Cell

Table Footer

Dropdown

Radio Button

Image

Hero Image

Card

Each component has:

A .tsx file for the component logic.

A .stories.tsx file for Storybook documentation.

A .types.ts file for TypeScript interfaces.

A .tests.tsx file for unit tests.

An index.ts file for exports.

Testing
Each component has at least two unit tests:

Visibility Test: Ensures the component is rendered correctly.

Disabled State Test: Ensures the component changes appearance when disabled.

To run all tests:

bash
Copy
npm test
Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.