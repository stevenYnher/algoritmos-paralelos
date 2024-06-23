# Etapa de construcción
FROM node:17-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "dist/main.js"]


