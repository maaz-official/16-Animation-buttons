import React from 'react';
import './App.css';  // Ensure your styles are in this CSS file.

const App = () => {
  return (
    <div className="frame">
      <h1>Animation Buttons</h1>
      <p>Hover over us and enjoy the satisfying animation designs!</p>
      {Array.from({ length: 16 }, (_, i) => (
        <button key={i} className={`custom-btn btn-${i + 1}`}>
          {i === 11 ? 'Click! Read More' : 'Read More'}
        </button>
      ))}
      <p style={{ fontFamily: 'Andale Mono, monospace' }}>
        Design By Goowrite.com
      </p>
    </div>
  );
};

export default App;
