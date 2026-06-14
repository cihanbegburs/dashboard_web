# Build stage - TypeScript kodunu derle
FROM node:20-alpine AS builder
WORKDIR /app

ARG BUILD_ENV=prod

COPY package.json package-lock.json* ./
RUN npm install

COPY tsconfig.json tsconfig.node.json vite.config.ts ./
COPY src ./src
COPY index.html ./
COPY public ./public

RUN if [ "$BUILD_ENV" = "prod" ]; then \
      npm run build:prod; \
    else \
      npm run build:dev; \
    fi

# Final image sadece build edilmiş dist dosyalarını içerir
FROM nginx:stable-alpine AS runner
ARG BUILD_ENV=prod
COPY --from=builder /app/dist/. /usr/share/nginx/html/
COPY nginx.${BUILD_ENV}.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]