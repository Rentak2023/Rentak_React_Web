// server.cjs
async function start() {
  const port = process.env.PORT || 8080;

  // نستدعي Vite كـ module (ESM) من داخل ملف CJS
  const { preview } = await import('vite');

  const server = await preview({
    preview: {
      port,
      host: '0.0.0.0',
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
  console.error('❌ Failed to start Vite preview server:', err);
  process.exit(1);
});
