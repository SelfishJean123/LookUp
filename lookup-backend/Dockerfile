# Use the Node.js base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install live-server globally
RUN npm install -g live-server

# Copy the rest of the application files
COPY . .

# Run the build step (if applicable)
RUN npm run build

# Set permissions (if necessary)
RUN chmod -R 777 ./node_modules

RUN ls -ltr dist

RUN pwd

# Expose the default live-server port (8080)
EXPOSE 5000

# Use live-server to serve the built files with auto-reload
CMD ["live-server", "."]
#CMD ["node", "./dist/final.js"]
