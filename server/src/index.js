import Fastify from 'fastify';

const app = Fastify({ logger: true });

// Health check: the frontend uses this endpoint to verify that the backend is running.
app.get('/api/health', async () => ({ status: 'ok' }));

try {
  await app.listen({ port: 3001, host: '127.0.0.1' });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
