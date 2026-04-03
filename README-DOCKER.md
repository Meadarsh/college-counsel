# Docker Setup Guide for UniCompare

This guide explains how to run the UniCompare applications using Docker and Docker Compose.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your system
- Docker Compose (included with Docker Desktop)

## Project Structure

The project consists of three main services:
- **MongoDB**: Database server (port 27017)
- **Admin Panel**: Admin interface (port 3003)
- **UniCompare**: Main frontend application (port 3000)

## Setup Instructions

### 1. Configure Environment Variables

Before running the containers, you need to set up environment files for both applications.

#### For Admin Panel:
1. Navigate to `admin-pannel` directory
2. Copy your existing `.env` file or create a new one
3. **Important**: Update the `MONGO_URI` to use the Docker network:
   ```env
   MONGO_URI=mongodb://mongodb:27017/unicompare-admin
   ```
4. Add any other required environment variables from your existing configuration

#### For UniCompare:
1. Navigate to `unicompare` directory
2. Copy your existing `.env` file or create a new one
3. **Important**: Update the `MONGO_URI` to use the Docker network:
   ```env
   MONGO_URI=mongodb://mongodb:27017/unicompare
   ```
4. Add any other required environment variables from your existing configuration

> **Note**: The hostname `mongodb` in the connection string refers to the MongoDB service defined in docker-compose.yml. Docker's internal DNS resolves this to the correct container IP.

### 2. Build Docker Images

From the root `UniCompare` directory, run:

```bash
docker-compose build
```

This will build Docker images for both applications. The first build may take several minutes as it downloads base images and installs dependencies.

### 3. Start All Services

To start all containers in detached mode:

```bash
docker-compose up -d
```

This command will:
1. Start the MongoDB container
2. Wait for MongoDB to be healthy
3. Start both application containers

### 4. Verify Services are Running

Check the status of all containers:

```bash
docker-compose ps
```

You should see three containers running:
- `unicompare-mongodb`
- `unicompare-admin`
- `unicompare-frontend`

### 5. View Logs

To view logs from all services:

```bash
docker-compose logs -f
```

To view logs from a specific service:

```bash
docker-compose logs -f admin-pannel
docker-compose logs -f unicompare
docker-compose logs -f mongodb
```

### 6. Access the Applications

- **Admin Panel**: http://localhost:3003
- **UniCompare**: http://localhost:3000
- **MongoDB**: localhost:27017 (can connect using MongoDB Compass or mongosh)

## Common Commands

### Stop All Services
```bash
docker-compose down
```

### Stop and Remove Volumes (⚠️ This will delete all database data)
```bash
docker-compose down -v
```

### Restart a Specific Service
```bash
docker-compose restart admin-pannel
docker-compose restart unicompare
```

### Rebuild and Restart After Code Changes
```bash
docker-compose up -d --build
```

### View Resource Usage
```bash
docker stats
```

## Troubleshooting

### Application Can't Connect to MongoDB

**Symptoms**: Application logs show connection errors to MongoDB

**Solutions**:
1. Verify MongoDB is running: `docker-compose ps mongodb`
2. Check MongoDB logs: `docker-compose logs mongodb`
3. Ensure your `.env` file uses `mongodb://mongodb:27017/...` as the connection string
4. Restart the application container: `docker-compose restart admin-pannel` or `docker-compose restart unicompare`

### Port Already in Use

**Symptoms**: Error message like "port is already allocated"

**Solutions**:
1. Stop any local processes using ports 3000, 3003, or 27017
2. Or modify the port mappings in `docker-compose.yml` (left side of the colon)

### Build Failures

**Symptoms**: Errors during `docker-compose build`

**Solutions**:
1. Ensure `package.json` and `package-lock.json` exist in both application directories
2. Check that you have sufficient disk space
3. Try cleaning Docker cache: `docker system prune -a`

### Application Shows "Cannot find module" Errors

**Symptoms**: Runtime errors about missing modules

**Solutions**:
1. Rebuild the images: `docker-compose build --no-cache`
2. Ensure all dependencies are in `package.json`

## Data Persistence

MongoDB data is stored in Docker volumes:
- `mongodb_data`: Database files
- `mongodb_config`: MongoDB configuration

These volumes persist even when containers are stopped. To completely remove data, use:
```bash
docker-compose down -v
```

## Accessing MongoDB Directly

To access the MongoDB shell inside the container:

```bash
docker exec -it unicompare-mongodb mongosh
```

Then you can run MongoDB commands:
```javascript
show dbs
use unicompare
show collections
db.collection_name.find()
```

## Updating the Application

After making code changes:

1. Rebuild the specific service:
   ```bash
   docker-compose build admin-pannel
   # or
   docker-compose build unicompare
   ```

2. Restart the service:
   ```bash
   docker-compose up -d admin-pannel
   # or
   docker-compose up -d unicompare
   ```

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Use proper MongoDB credentials (update `docker-compose.yml` to add authentication)
3. Consider using Docker secrets for sensitive data
4. Set up proper reverse proxy (nginx) for SSL/TLS
5. Configure proper backup strategy for MongoDB volumes

---

## Development Mode

For development with hot-reloading and live code updates, use the development Docker Compose file:

### Start Development Environment

```bash
docker-compose -f docker-compose.dev.yml up
```

Or run in detached mode:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Development Mode Features

- **Hot-Reloading**: Code changes are automatically reflected without rebuilding
- **Volume Mounting**: Your local source code is mounted into containers
- **Auto Install**: Dependencies are automatically installed on startup
- **Same Database**: Uses the same MongoDB setup with shared collections
- **Fast Startup**: No build process required

### Development Workflow

1. Make changes to your code in `admin-pannel` or `unicompare` directories
2. Changes are automatically detected and the app reloads
3. View logs: `docker-compose -f docker-compose.dev.yml logs -f`
4. Stop: `docker-compose -f docker-compose.dev.yml down`

### Switching Between Modes

**Stop Production and Start Development:**
```bash
docker-compose down
docker-compose -f docker-compose.dev.yml up -d
```

**Stop Development and Start Production:**
```bash
docker-compose -f docker-compose.dev.yml down
docker-compose up -d
```

> **Note**: Both modes use separate MongoDB volumes (`mongodb_data` for production, `mongodb_data_dev` for development) to avoid conflicts.

---

## Support

If you encounter issues not covered in this guide:
1. Check container logs: `docker-compose logs`
2. Verify all environment variables are set correctly
3. Ensure Docker Desktop is running and has sufficient resources allocated
