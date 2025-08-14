# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development Workflow
```bash
# Start development server (Docker-based, port 3000)
npm run dev

# Run tests locally (fast)
npm run test
npm run test:watch

# Run linting locally (fast) 
npm run lint

# Production build and server (Docker-based)
npm run build
npm run start  # Runs on port 3001
```

### Docker Commands
```bash
# For CI/production environments (slower but consistent)
npm run test:ci    # Run tests in Docker
npm run lint:ci    # Run linting in Docker

# Docker management
npm run docker:down  # Stop all containers
npm run docker:logs  # View container logs

# Direct Docker builds
npm run docker:build      # Production image
npm run docker:build-dev  # Development image
```

### Testing
```bash
# Run single test file
npx jest src/app/page.test.tsx

# Run tests with specific pattern
npx jest --testNamePattern="renders a heading"

# Jest config is in jest.config.js with setup in jest.setup.ts
```

## Architecture & Project Structure

### Docker-First Development
This project is designed with Docker as the primary development environment:

- **Development**: Uses `docker-compose --profile dev` with hot reload
- **Production**: Multi-stage Docker build with Next.js standalone output
- **Hybrid Scripts**: Local commands for speed (`npm test`, `npm run lint`), Docker commands for CI consistency (`npm run test:ci`, `npm run lint:ci`)

### Next.js Configuration
- **App Router**: Uses Next.js 15 with App Router (`src/app/` directory)
- **Standalone Output**: Configured for Docker optimization (`output: "standalone"` in next.config.ts)
- **TypeScript**: Strict mode enabled with additional compiler flags for enhanced type safety
- **Turbopack**: Enabled for faster development builds

### Code Quality Setup
- **ESLint**: Comprehensive configuration with import sorting, unused imports removal, and accessibility rules
- **TypeScript**: Enhanced strict mode with flags like `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- **Testing**: Jest + React Testing Library with jsdom environment

### Port Configuration
- **Development server**: http://localhost:3000 (Docker container)
- **Production server**: http://localhost:3001 (Docker container)
- Internal container port is always 3000

### TypeScript Path Mapping
- `@/*` maps to `./src/*` for clean imports
- Example: `import Component from '@/components/Component'`

## Development Notes

### Docker Volume Mounting
The development setup uses volume mounting for hot reload:
- Source code: `.:/app`
- Node modules: `/app/node_modules` (prevents host conflicts)
- Next.js cache: `/app/.next` (improves performance)

### ESLint Rules
Key enforced rules:
- Import organization with alphabetical sorting
- Unused imports automatic removal
- TypeScript consistent type imports (`import type`)
- Accessibility compliance (jsx-a11y)
- Nullish coalescing and optional chaining preferences

### Testing Strategy
- Local testing for development speed (~1 second)
- Docker testing for CI consistency (~45 seconds with full dependency installation)
- Tests located alongside components (e.g., `page.test.tsx` next to `page.tsx`)

### Build System
- **Development**: Uses Turbopack for faster builds
- **Production**: Standard Next.js build with standalone output
- **Docker**: Multi-stage builds for optimized production images with Node.js 22 Alpine

### Key Dependencies
- Next.js 15.4.6 with React 19
- TypeScript with enhanced strict mode
- Tailwind CSS for styling
- Jest + React Testing Library for testing
- ESLint with multiple plugins for code quality