FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY package.json /usr/src/app/
RUN npm install --silent
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
RUN npm run build
CMD ["npm","run", "serve"]
