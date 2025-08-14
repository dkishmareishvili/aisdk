# Docker Setup for Next.js App

## Prerequisites
- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

## Quick Start

### Production Build
```bash
# Build the production image
docker build -t aisdk:latest .

# Run the production container
docker run -p 3000:3000 aisdk:latest
```

### Using Docker Compose

#### Production
```bash
# Run production build
docker-compose up app
```

#### Development
```bash
# Run development server with hot reload
docker-compose --profile dev up app-dev
```

## Available Services

- **app** (port 3000): Production build
- **app-dev** (port 3001): Development server with hot reload

## Docker Files

- `Dockerfile`: Multi-stage production build
- `Dockerfile.dev`: Development environment
- `docker-compose.yml`: Service orchestration
- `.dockerignore`: Exclude unnecessary files

## Production Features

- Multi-stage build for smaller image size
- Non-root user for security
- Standalone output for optimal performance
- Alpine Linux for minimal footprint

## Environment Variables

Set in docker-compose.yml or pass via `-e` flag:
- `NODE_ENV`: production/development
- `PORT`: Server port (default: 3000)
- `HOSTNAME`: Server hostname (default: 0.0.0.0)