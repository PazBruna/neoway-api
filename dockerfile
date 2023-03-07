FROM node:12
WORKDIR /usr/app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 8080
CMD [ "npm","start" ]