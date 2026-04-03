import nodeCron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();

async function runEvery12Hours() {
  console.log(`[${new Date().toISOString()}] Cron job running at:`, new Date().toLocaleTimeString());

  await fetch(`${process.env.BASE_URL}/api/ai-generate`);
  console.log(`[${new Date().toISOString()}] Task completed`);
}

console.log(`[${new Date().toISOString()}] Starting cron job that runs every 6 hours`);

const task = nodeCron.schedule('0 */6 * * *', runEvery12Hours, {
  scheduled: true,
  timezone: 'Asia/Kolkata' 
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nStopping cron job...');
  task.stop();
  process.exit(0);
});

// Run immediately on start
runEvery12Hours();
