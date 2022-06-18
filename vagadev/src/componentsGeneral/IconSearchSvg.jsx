import React from 'react';

const IconSearchSvg = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 25.719 25.719"
    >
      <path
        fill={color}
        d="M19 3a9.995 9.995 0 00-7.75 16.313l-7.969 7.968 1.438 1.438 7.969-7.969A10 10 0 1019 3zm0 2a8 8 0 11-8 8 7.985 7.985 0 018-8z"
        transform="translate(-3.281 -3)"
      ></path>
    </svg>
  );
};

export default IconSearchSvg;
