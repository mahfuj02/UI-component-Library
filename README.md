# UI Component Library with Code Quality Checks (Assignment 13)

This repository implements a UI Component Library with integrated code quality checks, continuous integration/continuous delivery (CI/CD) pipeline, and containerized deployment.

## Features Implemented

- **Husky Pre-commit Hooks**: Prevents commits that don't pass code quality standards
- **Prettier Integration**: Ensures consistent code formatting
- **ESLint Configuration**: Enforces code quality rules
- **Automated Testing**: Runs tests before allowing commits
- **GitHub Actions CI/CD**: Mirrors local checks in the cloud pipeline
- **Docker Containerization**: Packages and serves the application

## Running the Application

### Prerequisites

- Docker installed on your machine
- Git (if you want to clone the repository)

### Steps to Run the Application

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/mahfuj02/UI-component-Library.git
   cd UI-component-Library
   ```

2. **Build and run the Docker container**:
   ```bash
   # Build the Docker image
   docker build -t mahfuj_ui_component_library .

   # Run the container with the required name and port mapping
   docker run -d --name mahfuj_coding_assignment13 -p 8018:8018 mahfuj_ui_component_library
   ```

3. **Access the application**:
   Open your web browser and navigate to:
   ```
   http://localhost:8018
   ```

4. **Stop the container** (when you're done):
   ```bash
   docker stop mahfuj_coding_assignment13
   docker rm mahfuj_coding_assignment13
   ```

## Code Quality Checks

This project implements several code quality checks:

### 1. Pre-commit Hooks with Husky

Husky is configured to run the following checks before each commit:
- ESLint to detect and fix code quality issues
- Prettier to enforce consistent code formatting
- Jest tests to ensure all components work as expected

If any of these checks fail, the commit will be blocked.

### 2. GitHub Actions CI/CD Pipeline

The GitHub Actions workflow runs on every push and pull request to the main branch, checking:
- Code formatting with Prettier
- Code quality with ESLint
- Component functionality with automated tests

### 3. How to Modify Components

When modifying components:
1. Make your changes
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your change description"
   ```
3. If any quality checks fail, fix the issues and try again
4. Push your changes:
   ```bash
   git push origin main
   ```

## Project Structure

```
.
├── .github/workflows    # GitHub Actions configuration
├── .husky               # Pre-commit hook configuration
├── src/                 # Source code
│   ├── components/      # UI Components
│   └── ...
├── .eslintrc            # ESLint configuration
├── .prettierrc          # Prettier configuration
├── Dockerfile           # Docker configuration
├── README.md            # This file
└── package.json         # Project dependencies and scripts
```

## Technical Details

- The Docker container runs on port 8018
- Working directory: `/mahfuj_ui_garden_build_checks`
- Container name: `mahfuj_coding_assignment13`