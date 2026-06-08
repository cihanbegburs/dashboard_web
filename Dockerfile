# Build stage - TypeScript kodunu derle
FROM node:20-alpine AS builder
WORKDIR /app

# BUILD_ENV = dev veya prod (default: dev)
ARG BUILD_ENV=dev

# Dependencies yükle
COPY package.json package-lock.json* ./
RUN npm install

COPY tsconfig.json tsconfig.node.json vite.config.ts ./
COPY src ./src
COPY dist ./dist
COPY index.html ./

# Build based on environment
RUN if [ "$BUILD_ENV" = "prod" ]; then \
      npm run build:prod; \
    else \
      npm run build:dev; \
    fi

# Set environment based on BUILD_ENV
ENV NODE_ENV=${BUILD_ENV}
EXPOSE 3001
CMD ["npm", "start"]