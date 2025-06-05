
import React, { useState } from 'react';
import axios from 'axios';

export default function ChartUploader({ onResult }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/analyze", formData);
    onResult(res.data);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
        Analyze
      </button>
    </div>
  );
}
