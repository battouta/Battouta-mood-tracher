import React from 'react';

export default function MoodCard({ mood }) {
  if (!mood) return <p>No mood selected yet.</p>;
  return <p style={{ fontSize: '2rem', marginTop: '20px' }}>You feel: {mood}</p>;
}
