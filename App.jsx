import React, { useState, useEffect } from 'react';
import './index.css';
import MoodCard from './MoodCard';

const moods = ['😊', '😐', '😢', '😡', '😴'];

export default function App() {
  const [mood, setMood] = useState(localStorage.getItem('mood') || '');

  useEffect(() => {
    localStorage.setItem('mood', mood);
  }, [mood]);

  return (
    <div className="card">
      <h2>What's your mood today?</h2>
      {moods.map((m) => (
        <button key={m} onClick={() => setMood(m)}>{m}</button>
      ))}
      <MoodCard mood={mood} />
    </div>
  );
}
