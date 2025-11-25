const express = require('express');
const router = express.Router();
const { simpleSuggestion } = require('../services/openaiService');

// POST /api/v1/suggestions/bullets
router.post('/bullets', async (req, res) => {
  try {
    const { bullets } = req.body;
    if (!bullets || !Array.isArray(bullets)) return res.status(400).json({ error: 'bullets array required' });
    const suggestion = simpleSuggestion(bullets);
    return res.json({ improvedBullets: suggestion });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
