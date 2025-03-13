# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /mahfuj_ui_garden_build_checks

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /mahfuj_ui_garden_build_checks/build /usr/share/nginx/html

# Copy custom nginx config to serve React Router routes properly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]