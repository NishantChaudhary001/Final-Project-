        // Mocked suggestion service (simple)
        // Returns a single simple enhanced bullet for the provided bullets.
        function simpleSuggestion(bullets) {
          // Very simple deterministic mock: return a single enhanced line.
          return bullets.map((b, i) => `Enhanced bullet point: ${b.slice(0, 120)}${b.length > 120 ? '...' : ''}`);
        }

        module.exports = { simpleSuggestion };

/*
        // To use real OpenAI, replace the above with actual API call like:
        const OpenAI = require('openai');
        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        async function improveBullets(bullets) {
          // call OpenAI here and return an array of improved bullets
        }
*/
