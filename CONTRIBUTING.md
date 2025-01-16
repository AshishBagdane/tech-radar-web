# Contributing to Tech Radar

Thank you for your interest in contributing to Tech Radar! This document provides guidelines and best practices for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Bug Reports & Feature Requests](#bug-reports--feature-requests)
- [Review Process](#review-process)

## Code of Conduct

Our project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code.

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## Getting Started

### Prerequisites

- Node.js (v22.4.0 or higher)
- Yarn package manager
- Git

### Setting Up Development Environment

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/your-username/tech-radar-web.git

# Add upstream remote
git remote add upstream https://github.com/original/tech-radar-web.git

# Install dependencies
yarn install

# Create a new branch for your feature/fix
git checkout -b feature/your-feature-name
```

## Development Workflow

### 1. Keeping Your Fork Updated

```bash
git fetch upstream
git rebase upstream/master
```

### 2. Development Cycle

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Update documentation
5. Run local tests
6. Commit changes
7. Push to your fork
8. Create pull request

### 3. Branch Naming Convention

- Feature: `feature/description`
- Bug Fix: `fix/description`
- Documentation: `docs/description`
- Refactor: `refactor/description`

## Coding Standards

### TypeScript/JavaScript

```typescript
// Use TypeScript for new code
// Use interfaces for object types
interface TechnologyData {
  id: string;
  name: string;
  description: string;
}

// Use proper type annotations
function processTechnology(tech: TechnologyData): void {
  // Implementation
}

// Use async/await for asynchronous operations
async function fetchTechnology(id: string): Promise<TechnologyData> {
  try {
    const response = await api.get(`/technology/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}
```

### React Components

```typescript
// Use functional components
const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  // Implementation
};

// Use proper prop types
interface TechnologyCardProps {
  technology: TechnologyData;
  onUpdate?: (id: string) => void;
}

// Use hooks appropriately
const useTechnologyData = (id: string) => {
  // Hook implementation
};
```

### CSS/Styling

```typescript
// Use Tailwind utility classes
// Group related classes
const buttonClasses = `
  px-4 py-2
  bg-blue-500 hover:bg-blue-600
  text-white font-medium
  rounded-lg
  transition-colors duration-200
`;
```

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>

Note: scope is optional
```

### Types

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

### Example

```
feat(radar): add interactive quadrant selection

Implement interactive quadrant selection in the radar visualization.
The feature allows users to click on quadrants to focus on specific areas.

Closes #123
```

## Pull Request Process

### 1. Preparation

- Ensure code meets all standards
- Update documentation
- Add/update tests
- Verify all tests pass
- Rebase on latest main branch

### 2. PR Description Template

```markdown
## Description

[Detailed description of changes]

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?

[Describe testing approach]

## Checklist

- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Changelog updated
```

### 3. Review Process

1. Submit PR against main branch
2. Address review comments
3. Obtain required approvals
4. Maintain clean commit history

## Testing Guidelines

### Unit Tests

```typescript
describe("TechnologyService", () => {
  it("should fetch technology details", async () => {
    // Test implementation
  });
});
```

### Component Tests

```typescript
describe('TechnologyCard', () => {
  it('should render technology details', () => {
    render(<TechnologyCard technology={mockTechnology} />);
    // Test assertions
  });
});
```

### Test Coverage Requirements

- Minimum 80% coverage for new code
- Critical paths must have 100% coverage
- Include edge cases and error scenarios

## Documentation

### Code Documentation

```typescript
/**
 * Processes technology data for radar visualization.
 * @param {TechnologyData} data - Raw technology data
 * @returns {RadarPoint} Processed radar point
 * @throws {ValidationError} If data is invalid
 */
function processTechnologyData(data: TechnologyData): RadarPoint {
  // Implementation
}
```

### Component Documentation

```typescript
/**
 * TechnologyCard Component
 *
 * Displays technology information in a card format with
 * interactive elements for updates and deletion.
 *
 * @example
 * <TechnologyCard
 *   technology={techData}
 *   onUpdate={handleUpdate}
 * />
 */
```

## Bug Reports & Feature Requests

### Bug Report Template

```markdown
### Description

[Clear description of the bug]

### Steps to Reproduce

1. [First Step]
2. [Second Step]
3. [and so on...]

### Expected Behavior

[What you expected to happen]

### Actual Behavior

[What actually happened]

### Environment

- Browser/Version:
- OS:
- Node Version:
- Package Versions:
```

### Feature Request Template

```markdown
### Feature Description

[Detailed description of the feature]

### Problem it Solves

[What problem does this solve?]

### Proposed Solution

[Your proposed solution]

### Alternative Solutions

[Any alternative solutions considered]
```

## Review Process

### Code Review Guidelines

1. Check code style and standards
2. Verify test coverage
3. Review documentation updates
4. Check performance implications
5. Verify error handling
6. Review security implications

### Review Checklist

- [ ] Code follows project standards
- [ ] Tests are comprehensive and pass
- [ ] Documentation is updated
- [ ] No security vulnerabilities
- [ ] Performance is acceptable
- [ ] Error handling is proper
- [ ] Commit messages are clear
