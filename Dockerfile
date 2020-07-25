FROM node:12.18.2-stretch-slim as builder

RUN mkdir /app

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run build

FROM nginx

COPY --from=builder /app/build /app/build

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]