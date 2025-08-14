# AISDK - Next.js App with Docker

This is a [Next.js](https://nextjs.org) project with TypeScript, Tailwind CSS, and comprehensive Docker setup for development and production.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop)

## Getting Started

### Development (Recommended)

Start the development server with hot reload:

```bash
npm run dev
```

This runs the app in Docker with:
- Hot reload enabled
- Port 3000 mapped to host
- Volume mounting for live code changes

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Run the production build:

```bash
npm run start
```

Open [http://localhost:3001](http://localhost:3001) with your browser.

### Available Commands

```bash
# Development
npm run dev          # Start development server (Docker)
npm run build        # Build production image
npm run start        # Start production server (Docker)

# Testing & Linting
npm run test         # Run tests in Docker
npm run lint         # Run ESLint in Docker

# Docker Management
npm run docker:logs  # View container logs
npm run docker:down  # Stop all containers
```

## Project Features

- **Next.js 15** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling
- **ESLint** with import sorting and accessibility rules
- **Jest & React Testing Library** for testing
- **Docker** containerization with Node.js 22
- **Multi-stage builds** for optimized production images

## Development

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file thanks to Docker volume mounting.

## Project Structure

```
├── src/
│   └── app/           # Next.js App Router pages
├── public/            # Static assets
├── Dockerfile         # Production Docker image
├── Dockerfile.dev     # Development Docker image
├── docker-compose.yml # Docker orchestration
└── docker-README.md   # Detailed Docker documentation
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Docker Documentation](https://docs.docker.com/) - learn about containerization
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript

## Deployment

The app is containerized and ready for deployment to any Docker-compatible platform:

- Docker Hub
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- Kubernetes clusters

Build and push your production image:

```bash
npm run build
docker tag aisdk:latest your-registry/aisdk:latest
docker push your-registry/aisdk:latest
```
