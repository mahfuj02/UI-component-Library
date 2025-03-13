# UI Component Library with Code Quality Checks

This project extends the UI Component Library from Assignment 12 with code quality checks and Docker deployment.

## Features

- UI Component Library with reusable components
- Husky pre-commit hooks for code quality enforcement
- Prettier for consistent code formatting
- ESLint for code quality rules
- Automated testing with pre-commit validation
- GitHub Actions CI/CD pipeline
- Docker containerization
- Nginx server for hosting the production build

## Prerequisites

- Node.js (v16+)
- npm (v8+)
- Docker and Docker Compose
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahfuj02/UI-component-Library.git
   cd UI-component-Library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize Husky:
   ```bash
   npm run prepare
   ```

## Development

### Starting the Development Server

```bash
npm start
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

### Code Quality Tools

- **Formatting Code with Prettier**:
  ```bash
  npm run format
  ```

- **Linting with ESLint**:
  ```bash
  npm run lint
  ```

- **Fixing Lint Issues**:
  ```bash
  npm run lint:fix
  ```

- **Running Tests**:
  ```bash
  npm test
  ```

### Pre-commit Hooks

The project uses Husky to run the following checks before each commit:

- ESLint to identify and fix code quality issues
- Prettier to ensure consistent code formatting
- Tests to verify functionality

If any of these checks fail, the commit will be blocked until the issues are resolved.

## Deployment with Docker

### Build and Run with Docker Compose

The easiest way to deploy the application is using Docker Compose:

```bash
docker-compose up -d
```

This will:
1. Build the Docker image
2. Create a container named `mahfuj_coding_assignment13`
3. Start the container and expose the application on port 8018

### Build and Run with Docker CLI

Alternatively, you can use Docker CLI commands:

1. Build the Docker image:
   ```bash
   docker build -t ui-component-library .
   ```

2. Run the container:
   ```bash
   docker run -d --name mahfuj_coding_assignment13 -p 8018:8018 ui-component-library
   ```

### Accessing the Deployed Application

Once the container is running, access the application at:
[http://localhost:8018](http://localhost:8018) or [http://127.0.0.1:8018](http://127.0.0.1:8018)

## CI/CD Pipeline

This project includes a GitHub Actions workflow that runs on every push and pull request to the main branch. The workflow:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Runs ESLint to check code quality
5. Runs Prettier to verify formatting
6. Runs tests to ensure functionality
7. Builds the application for production

If any step fails, the workflow will fail and notify you of the issues.

## Folder Structure

```
.
├── .github/workflows      # GitHub Actions CI/CD configuration
├── .husky                 # Git hooks for pre-commit checks
├── public                 # Static assets
├── src                    # Source code
│   ├── components         # UI components
│   ├── styles             # CSS and styling
│   └── ...
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── Dockerfile             # Docker build configuration
├── docker-compose.yml     # Docker Compose configuration
├── nginx.conf             # Nginx server configuration
└── README.md              # This documentation
```

## Contributing

When contributing to this project, your code will automatically be checked for:
- Proper formatting with Prettier
- Code quality with ESLint
- Passing tests

The GitHub Actions workflow will run these same checks when you create a pull request.