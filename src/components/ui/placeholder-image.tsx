'use client';

import { useEffect, useState } from 'react';

interface PlaceholderImageProps {
  text: string;
  width?: number;
  height?: number;
  className?: string;
}

export const PlaceholderImage = ({ text, width = 800, height = 600, className = '' }: PlaceholderImageProps) => {
  const [color, setColor] = useState('');

  // Ustawienie koloru po pierwszym renderze (po stronie klienta)
  useEffect(() => {
    // Generate a random pastel color
    const getRandomPastelColor = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 80%)`;
    };
    setColor(getRandomPastelColor());
  }, []);

  const textColor = 'hsl(0, 0%, 20%)';

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        backgroundColor: color,
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="text-center p-4">
        <p style={{ color: textColor, fontWeight: 'bold' }}>{text}</p>
        <p style={{ color: textColor, fontSize: '0.8em' }}>
          {width} × {height}
        </p>
      </div>
    </div>
  );
};
