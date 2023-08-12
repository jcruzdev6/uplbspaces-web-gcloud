# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:19-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app
 
# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build
 
CMD [ "npm", "run", "start" ]
