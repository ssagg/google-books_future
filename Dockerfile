FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm i
COPY . .
CMD ["npm","run","dev"]
