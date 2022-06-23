import React from 'react';

const CloseBtnSvg = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42.426 42.426"
    >
      <g transform="translate(12.279 12.061)">
        <circle
          cx="15"
          cy="15"
          r="15"
          fill="#f55959"
          data-name="Elipse 2"
          transform="rotate(-45 4.908 19.398)"
        ></circle>
        <path
          fill="#fff"
          d="M0 0H2V19H0z"
          data-name="Retângulo 14"
          transform="rotate(-45 5.15 -.501)"
        ></path>
        <path
          fill="#fff"
          d="M0 0H2V18H0z"
          data-name="Retângulo 15"
          transform="rotate(45 4.784 18.653)"
        ></path>
      </g>
    </svg>
  );
};

export default CloseBtnSvg;
