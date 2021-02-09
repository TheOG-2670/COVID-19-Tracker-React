#for react client
FROM alpine:latest

WORKDIR /covid-tracker

RUN apk update
RUN apk add nodejs-current
RUN apk add npm
RUN apk add git

COPY ./covid-tracker .

RUN npm install
RUN npm install react
RUN npm install react-dom
RUN npm install react-scripts
RUN npm install react-router-dom
RUN npm install chart.js
RUN npm install jquery
RUN npm install git

EXPOSE 3000
