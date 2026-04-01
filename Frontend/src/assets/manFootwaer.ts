/**
 * Man Footwear Categories Data
 * Contains all man footwear category data with images
 */

// Import images from assets folder
import peshawariImg from './images/men-shoes/peshawari.jpg';
import sandalImg from './images/men-shoes/sandal.jpg';
import shoesImg from './images/men-shoes/shoes.jpg';
import chapalImg from './images/men-shoes/chappel.jpg';

export const manFootwearCategories = [
  {
    id: 'peshawari',
    name: 'Peshawari',
    image: peshawariImg,
    key: 'peshawari'
  },
  {
    id: 'sandal',
    name: 'Sandal',
    image: sandalImg,
    key: 'sandal'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image: shoesImg,
    key: 'shoes'
  },
  {
    id: 'chapal',
    name: 'Chapal',
    image: chapalImg,
    key: 'chapal'
  },
];
