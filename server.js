import { app as serverEn } from './morefont-v5/server/en/server.mjs';
import { app as serverFr } from './morefont-v5/server/fr/server.mjs';

const express = require('express');

function getPreferredLanguage(req) {
  const acceptedLanguages = req.acceptsLanguages(['fr', 'en']);
  return acceptedLanguages || 'fr'; // Default to 'fr' if no match is found
}

function run() {
  const port = process.env.PORT || 4000;
  const server = express();

  // Redirect root requests to the preferred language
  server.get('/', (req, res) => {
    const lang = getPreferredLanguage(req);
    res.redirect(`/${lang}`);
  });

  // Serve the language-specific servers
  server.use('/fr', serverFr());
  server.use('/en', serverEn());

  // Handle unmatched routes
  server.use((req, res) => {
    res.status(404).send('Page not found');
  });

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
