FROM node:14.5.0-stretch as build

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run build

FROM httpd:2.4.43-alpine

WORKDIR /usr/local/apache2/htdocs

EXPOSE 80

COPY --from=build /usr/src/app/public .