
import React, { useState } from 'react';
import ChartUploader from './ChartUploader';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">🧠 SMC Entry Finder</h1>
      <ChartUploader onResult={setResult} />
      {result && (
        <div className="mt-6 p-4 bg-green-100 border rounded">
          <p>📈 Entry Type: {result.entry_type}</p>
          <p>📍 Entry Zone: {result.entry_zone[0]} - {result.entry_zone[1]}</p>
          <p>⛔ Stop Loss: {result.stop_loss}</p>
          <p>🎯 TP1: {result.take_profit_1}</p>
          <p>🎯 TP2: {result.take_profit_2}</p>
        </div>
      )}
    </div>
  );
}

export default App;
