# JavaScript CI with SonarQube

This is a simple test repository created to learn and practice:

- Continuous Integration (CI) with GitHub Actions
- Code quality analysis with SonarQube/SonarCloud
- JavaScript testing with Jest
- Code coverage reporting

## What's Inside

- Basic JavaScript function with Jest tests
- GitHub Actions workflow for automated testing
- SonarQube integration for code quality analysis
- Code coverage reporting configuration

## Running Locally

1. Clone this repository
2. Install dependencies: `npm ci`
3. Run tests with coverage: `npm test -- --coverage`
4. Run SonarQube analysis: `npx sonar-scanner`

## CI Pipeline

The CI pipeline in `.github/workflows/ci.yaml` runs on pull requests to the develop branch and:

1. Sets up Node.js environment
2. Installs dependencies
3. Runs tests with coverage
4. Performs SonarQube analysis

This repository is for learning purposes only.