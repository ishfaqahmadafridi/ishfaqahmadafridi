/**
 * Man Footwear Categories Data
 * Contains all man footwear category data with images
 */

// Import images from assets folder
import peshawariImg from './peshawari.jpg';
import sandalImg from './sandal.jpg';
import shoesImg from './shoes.jpg';
import chapalImg from './chappel.jpg';

export const manFootwearCategories = [
  { 
    id: 'peshawari',
    name: 'Peshawari', 
    image: peshawariImg, 
    link: '#' 
  },
  { 
    id: 'sandal',
    name: 'Sandal', 
    image: sandalImg, 
    link: '#' 
  },
  { 
    id: 'shoes',
    name: 'Shoes', 
    image: shoesImg, 
    link: '#' 
  },
  { 
    id: 'chapal',
    name: 'Chapal', 
    image: chapalImg, 
    link: '#' 
  },
];
