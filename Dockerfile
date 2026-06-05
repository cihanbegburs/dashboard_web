# Build stage - TypeScript kodunu derle
FROM node:20-alpine AS builder
WORKDIR /app

# BUILD_ENV = dev veya prod (default: dev)
ARG BUILD_ENV=prod


# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

ARG BUILD_ENV=dev



# Set environment based on BUILD_ENV
ENV NODE_ENV=${BUILD_ENV}
EXPOSE 3001
CMD ["npm", "start"]
