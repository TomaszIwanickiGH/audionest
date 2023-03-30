import images from './images'

const navLinks = [
  {
    id: '/',
    text: 'Home',
  },
  {
    id: '/headphones',
    text: 'Headphones',
  },
  {
    id: '/speakers',
    text: 'Speakers',
  },
  {
    id: '/earphones',
    text: 'Earphones',
  },
]

const devices = [
  {
    image: images.headphonesLogo,
    title: 'HEADPHONES',
    text: 'SHOP',
    arrow: images.iconArrow,
    className: 'w-[120px] h-[150px]',
  },
  {
    image: images.speakersLogo,
    title: 'SPEAKERS',
    text: 'SHOP',
    arrow: images.iconArrow,
    className: 'w-[200px] h-[150px]',
  },
  {
    image: images.earphonesLogo,
    title: 'EARPHONES',
    text: 'SHOP',
    arrow: images.iconArrow,
    className: 'w-[150px] h-[170px]',
  },
]

export default { navLinks, devices }
