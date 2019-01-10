FROM node:alpine as builder

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]


FROM nginx
EXPOSE 4000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
