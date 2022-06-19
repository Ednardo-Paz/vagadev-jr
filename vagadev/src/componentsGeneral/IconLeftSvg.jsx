import React from 'react';

const IconLeftSvg = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 10 17.857"
    >
      <path
        fill={color}
        d="M16.249 4.281l-8.381 8.381-.524.548.524.548 8.381 8.381 1.1-1.1L9.51 13.21l7.833-7.833z"
        transform="translate(-7.344 -4.281)"
      ></path>
    </svg>
  );
};

export default IconLeftSvg;
