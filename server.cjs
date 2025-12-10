// server.cjs
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function start() {
  const port = process.env.PORT || 8080;
  
  // Build the app first if dist folder doesn't exist
  const fs = require('fs');
  if (!fs.existsSync('./dist')) {
    console.log('📦 Building application...');
    try {
      await execPromise('npm run build');
      console.log('✅ Build completed');
    } catch (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }
  }
  
  const { preview } = await import('vite');
  const server = await preview({
    preview: {
      port,
      host: '0.0.0.0',
      open: false
    },
  });
  console.log('✅ Vite preview server running on port', port);
  
  process.on('SIGTERM', () => {
    server.httpServer.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

start().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
