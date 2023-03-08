# Use a Node.js runtime as the base image
FROM node:14

# Install pm2 globally
RUN npm install pm2 -g

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the port used by your SailsJS app
EXPOSE 1337

# Start the SailsJS app using pm2
CMD ["pm2-runtime", "start", "npm", "--", "start", "--prod"]
