import React from 'react';

export default function Spinner({ size = 24, color = '#3b82f6' }) {
  const borderWidth = size / 8;

  return (
    <>
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        style={{
          width: size,
          height: size,
          border: `${borderWidth}px solid ${color}`,
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
    </>
  );
}
