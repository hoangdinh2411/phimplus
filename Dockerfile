FROM node:20.9.0

WORKDIR /plusphim

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]