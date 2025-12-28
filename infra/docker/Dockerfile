FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY backend/package*.json ./
COPY frontend/package*.json ./frontend/

# Install backend dependencies
RUN npm install

# Install frontend dependencies
RUN cd frontend && npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/src/index.js"]