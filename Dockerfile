# Build stage
FROM node:20 AS build

ARG VITE_SERVICE_KEY
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY

ENV VITE_SERVICE_KEY=$VITE_SERVICE_KEY
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID
ENV VITE_PUBLIC_KEY=$VITE_PUBLIC_KEY

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

# Run stage
FROM node:20

WORKDIR /app

# Install serve or any static file server you prefer
RUN npm install -g serve

# Copy build files from the build stage
COPY --from=build /app/dist /app

# Expose the serve port
EXPOSE 5000

# Run serve
CMD ["serve", "-s", "/app", "-l", "5000"]