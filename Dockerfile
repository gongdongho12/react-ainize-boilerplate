FROM node:lts-buster-slim as builder
RUN mkdir /app
WORKDIR /app
ADD . /app
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx
COPY --from=builder /app/build /app/build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]