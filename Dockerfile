FROM docker.io/node:16-alpine

# Set up pnpm
RUN apk add --no-cache libc6-compat git
RUN npm install -g pnpm
RUN npm install -g turbo@1.4.6


WORKDIR /app/

COPY package.json /app/
COPY turbo.json /app/
COPY pnpm-lock.yaml /app/
COPY pnpm-workspace.yaml /app/
COPY apps/ /app/apps/
COPY configs/ /app/configs/
COPY libs/ /app/libs/

RUN pnpm install

WORKDIR /app/apps/web

RUN pnpm run build

EXPOSE 8000
CMD pnpm run start -p 8000