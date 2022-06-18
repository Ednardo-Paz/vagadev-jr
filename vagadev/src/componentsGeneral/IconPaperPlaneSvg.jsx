import React from 'react';

const IconPaperPlane = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 31.969 29.237"
    >
      <path
        fill={color}
        d="M3.594 5.344l.438 1.875L5.969 16l-1.938 8.781-.437 1.875 1.781-.719 22-9L29.656 16l-2.281-.937-22-9zm2.781 3.312L21.906 15H7.781zM7.781 17h14.125L6.375 23.344z"
        transform="rotate(-21 12.578 17.037)"
      ></path>
    </svg>
  );
};

export default IconPaperPlane;
