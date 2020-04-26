# Use the official lightweight Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:10-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]
