# Build stage - TypeScript kodunu derle
FROM node:20-alpine AS builder
WORKDIR /app

# BUILD_ENV = dev veya prod (default: dev)
ARG BUILD_ENV=prod

# Dependencies yükle
COPY package.json package-lock.json* ./
RUN npm install

COPY tsconfig.json tsup.config.ts ./
COPY config ./config
COPY src ./src

# Build based on environment
RUN if [ "$BUILD_ENV" = "prod" ]; then \
      npm run build:prod; \
    else \
      npm run build:dev; \
    fi

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

ARG BUILD_ENV=dev

COPY package.json package-lock.json* ./

# Install dependencies based on environment
RUN if [ "$BUILD_ENV" = "prod" ]; then \
      npm install --production; \
    else \
      npm install; \
    fi

COPY --from=builder /app/dist ./dist
COPY config ./config

# Set environment based on BUILD_ENV
ENV NODE_ENV=${BUILD_ENV}
EXPOSE 3001
CMD ["npm", "start"]
