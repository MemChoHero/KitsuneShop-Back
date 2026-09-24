FROM node:22-alpine

WORKDIR /api

COPY package.json .

RUN npm i -g bun

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "start:dev"]