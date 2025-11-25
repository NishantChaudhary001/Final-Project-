import React, { useState } from 'react';
import SuggestionButton from './components/SuggestionButton';

export default function App() {
  const [bullets, setBullets] = useState([
    'worked on frontend features using React and Redux to improve user experience',
    'responsible for API integration and fixing bugs'
  ]);
  const [improved, setImproved] = useState([]);

  const applyImproved = (arr) => setImproved(arr);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-semibold mb-4">Smart Resume Builder with AI Suggestions</h1>
        <p className="text-sm text-gray-600 mb-6">Demo (mocked AI). Edit bullets and request suggestions.</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience bullets</label>
          <div className="mt-2 space-y-2">
            {bullets.map((b, i) => (
              <div key={i} className="p-3 border rounded-md bg-gray-50">{b}</div>
            ))}
          </div>
        </div>

        <SuggestionButton bullets={bullets} onApply={applyImproved} />

        {improved.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium">Improved bullets</h3>
            <ul className="mt-2 list-disc list-inside">
              {improved.map((b, i) => <li key={i} className="text-gray-800">{b}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
