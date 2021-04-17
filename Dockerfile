FROM node:latest

RUN mkdir -p /home/node/webapp/src

WORKDIR /home/node/webapp/src

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

