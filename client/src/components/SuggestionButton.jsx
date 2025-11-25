import React, { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export default function SuggestionButton({ bullets, onApply }) {
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/suggestions/bullets`, { bullets });
      onApply(res.data.improvedBullets || []);
    } catch (err) {
      console.error(err);
      alert('Suggestion failed (see console).');
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handle}
      disabled={loading}
      className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
      {loading ? 'Thinking...' : 'Get AI Suggestions'}
    </button>
  );
}
