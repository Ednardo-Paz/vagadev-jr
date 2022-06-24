import imgOutriders from './assets/img/product-outriders.jpg';
import imgCyber from './assets/img/product-cyberpunk2077.jpg';
import imgDonkey from './assets/img/product-donkey-kong-country-tropical-freeze.jpg';
import banner1 from '../src/assets/img/principal_banner_desktop.jpg';
import banner2 from '../src/assets/img/principal_banner_desktop_02.jpg';

export const jogos = [
  {
    banner: false,
    id: 56,
    img: imgOutriders,
    price: 200,
    title: 'Outriders',
  },
  {
    banner: false,
    id: 1,
    img: imgCyber,
    price: 200,
    title: 'CYBERPUNK 2077',
  },
  {
    banner: false,
    id: 27,
    img: imgDonkey,
    price: 200,
    title: 'Donkey Kong Countru Tropical Freeze',
  },
  {
    banner: true,
    id: 2,
    img: banner1,
    title: 'MORTAL KOMBAT',
    price: 299,
    description:
      'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
  },
  {
    banner: true,
    id: 5,
    img: banner2,
    title: 'Red Dead II',
    price: 0,
    description: '',
  },
];
