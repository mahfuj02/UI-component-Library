FROM node:18-alpine

WORKDIR /ahmed_mahfuj_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build storybook
RUN npm run build-storybook

# Use nginx to serve
FROM nginx:alpine
COPY --from=0 /ahmed_mahfuj_ui_garden/storybook-static /usr/share/nginx/html
EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]