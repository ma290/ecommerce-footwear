# Stage 1: Build the application
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite React application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Change default port from 80 to 8000 for Koyeb compatibility
RUN sed -i 's/listen  *80;/listen 8000;/g' /etc/nginx/conf.d/default.conf
RUN sed -i 's/listen  *\[::\]:80;/listen [::]:8000;/g' /etc/nginx/conf.d/default.conf

# Expose port 8000 to the outside
EXPOSE 8000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
