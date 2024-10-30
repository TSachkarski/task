import React from 'react';

const Bar = ({ timestamp, value }: DataPoint) => {
  const maxBarHeight = 64; // Define maxBarHeight as a constant within the component

  return (
    <div
      className="relative flex-1 mx-1 overflow-hidden rounded-md border border-green-300 border-opacity-80"
      style={{
        height: `${value * 2}px`, // Dynamic height based on value
      }}
    >
      {/* Full-height gradient background */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-md"
style={{
          height: `${maxBarHeight}px`, // Fixed max height for gradient
          background: `linear-gradient(to top, rgba(193, 237, 190, 0.7), #7CDD6D)`,
        }}
      ></div>
    </div>
  );
};

export default Bar;