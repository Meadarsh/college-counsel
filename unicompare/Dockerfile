# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Copy .env file if it exists (needed for build-time environment variables)
# The .env file will be excluded from the final image
COPY .env* ./

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
