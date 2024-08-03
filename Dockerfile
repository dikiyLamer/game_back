FROM node:alpine
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npx","ts-node", "src/index.ts" ]  