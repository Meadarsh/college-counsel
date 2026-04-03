# AI Generation Scheduler

This directory contains a Node.js script that uses `node-cron` to run AI generation tasks 4 times daily.

## Features

- Runs at 12 AM, 6 AM, 12 PM, and 6 PM daily (IST timezone)
- Uses `node-cron` for reliable scheduling
- Can run in both scheduled and one-time modes
- Logs all activities with timestamps

## Setup

1. Install the required dependencies:
   ```bash
   cd scripts
   npm install
   ```

## Usage

### Run in Scheduled Mode (runs continuously)
```bash
# From the scripts directory
npm start

# Or directly
node ai-generate.js
```

### Run Once (for testing)
```bash
# From the scripts directory
npm run generate

# Or directly
node ai-generate.js --run-once
```

## How It Works

1. The scheduler runs `ai-generate.js`
2. On schedule, it makes a GET request to `/api/ai-generate`
3. The API endpoint at `src/app/api/ai-generate/route.js` processes the request
4. All activities are logged to the console with timestamps

## Customization

1. **Change Schedule**: 
   Edit the `schedule` constant in `ai-generate.js` using cron syntax:
   ```javascript
   // Format: minute hour day-of-month month day-of-week
   const schedule = '0 0,6,12,18 * * *'; // 12 AM, 6 AM, 12 PM, 6 PM
   ```

2. **Modify Timezone**:
   Update the `timezone` option in `ai-generate.js`:
   ```javascript
   timezone: 'Asia/Kolkata' // Change to your timezone
   ```

3. **Customize AI Logic**:
   Edit `src/app/api/ai-generate/route.js` to implement your specific AI generation logic.

## Logs

All activities are logged to the console with timestamps. When running in production, you might want to redirect the output to a log file:

```bash
# On Linux/macOS
node ai-generate.js >> ai-scheduler.log 2>&1 &

# On Windows (PowerShell)
Start-Process -NoNewWindow -FilePath "node" -ArgumentList "ai-generate.js" -RedirectStandardOutput "ai-scheduler.log" -RedirectStandardError "ai-error.log"
```

## Running in Production

For production, consider using a process manager like PM2 to keep the scheduler running:

```bash
# Install PM2 globally
npm install -g pm2

# Start the scheduler
pm2 start ai-generate.js --name "ai-scheduler"

# Save the process list for automatic startup
pm2 save
pm2 startup
```
