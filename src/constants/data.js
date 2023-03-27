import images from './images'

const navLinks = [
  {
    id: '#home',
    text: 'Home',
  },
  {
    id: '#headphones',
    text: 'Headphones',
  },
  {
    id: '#speakers',
    text: 'Speakers',
  },
  {
    id: '#earphones',
    text: 'Earphones',
  },
]

const devices = [
  {
    image: images.headphonesLogo,
    title: 'Headphones',
    text: 'Shop',
    arrow: images.iconArrow,
  },
  {
    image: images.speakersLogo,
    title: 'Speakers',
    text: 'Shop',
    arrow: images.iconArrow,
  },
  {
    image: images.earphonesLogo,
    title: 'Earphones',
    text: 'Shop',
    arrow: images.iconArrow,
  },
]

export default { navLinks, devices }
