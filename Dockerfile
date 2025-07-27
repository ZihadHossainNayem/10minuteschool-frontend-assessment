# node 20 alpine 
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm ci

# copy source code
COPY . .

# build the app
RUN npm run build

# expose port 3000
EXPOSE 3000

# set environment variables for proper binding
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# start the application
CMD ["npm", "start"]
