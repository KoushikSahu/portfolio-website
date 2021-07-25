FROM node:latest

RUN mkdir -p /home/node/webapp/src

WORKDIR /home/node/webapp/src

COPY . .

RUN npm install

EXPOSE 3000

LABEL org.opencontainers.image.source https://github.com/KoushikSahu/portfolio-website

CMD ["npm", "start"]

