ARG NODE_VERSION=22

# Stage 1: Build
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Stage 2: Production
FROM node:${NODE_VERSION}-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build

USER node

EXPOSE 3000

HEALTHCHECK CMD wget --no-verbose --spider http://localhost:3000/ || exit 1

# Use `docker run --init` or `init: true` in compose for proper signal handling
CMD ["node", "build"]
