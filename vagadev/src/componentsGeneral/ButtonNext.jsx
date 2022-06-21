// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton({ element }) {
  const swiper = useSwiper();

  return (
    <div style={{ cursor: 'pointer' }} onClick={() => swiper.slideNext()}>
      {element}
    </div>
  );
}
