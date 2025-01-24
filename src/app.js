import path, { dirname } from 'node:path';
import express from 'express';

import index from './routes/index.js';

const __dirname = path.resolve(dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]):/, '$1:'));

const app = express();
const port = process.env.PORT || 3000; // Use a default port for development

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));


app.use(index);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});