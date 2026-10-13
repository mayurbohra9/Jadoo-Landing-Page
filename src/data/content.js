const assets = import.meta.glob(
  ['../assets/images/*', '../assets/icons/*', '../assets/logos/*', '../assets/decorations/*'],
  { eager: true, query: '?url', import: 'default' },
);
export const asset = (folder, name) => assets[`../assets/${folder}/${name}`];

export const services = [
  {
    title: 'Calculated Weather',
    icon: 'weather.svg',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    title: 'Best Flights',
    icon: 'flight.svg',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    featured: true,
  },
  {
    title: 'Local Events',
    icon: 'microphone.svg',
    description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
  },
  {
    title: 'Customization',
    icon: 'customization.svg',
    description: 'We deliver outsourced aviation services for military customers',
  },
];
export const destinations = [
  { name: 'Rome, Italy', price: '$5.42k', duration: '10 Days Trip', image: 'rome.webp' },
  { name: 'London, UK', price: '$4.2k', duration: '12 Days Trip', image: 'london.webp' },
  { name: 'Full Europe', price: '$15k', duration: '28 Days Trip', image: 'europe.webp' },
];
export const bookingSteps = [
  { title: 'Choose Destination', icon: 'choose-destination.svg', color: '#f0bb1f' },
  { title: 'Make Payment', icon: 'payment.svg', color: '#f15a2b' },
  { title: 'Reach Airport on Selected Date', icon: 'airport.svg', color: '#006380' },
];
export const testimonials = [
  {
    quote:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    name: 'Mike taylor',
    location: 'Lahore, Pakistan',
  },
  {
    quote:
      'From choosing our destination to the final day of our trip, everything felt effortless. A wonderful way to discover somewhere new.',
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
  },
  {
    quote:
      'Beautiful places, thoughtful planning, and memories we will keep forever. We are already looking forward to our next adventure.',
    name: 'Sarah Williams',
    location: 'London, UK',
  },
];
export const partners = ['Axon Airlines', 'Jetstar', 'Expedia', 'Qantas', 'Alitalia'];
export const footerGroups = [
  { title: 'Company', links: ['About', 'Careers', 'Mobile'] },
  { title: 'Contact', links: ['Help/FAQ', 'Press', 'Affiliates'] },
  { title: 'More', links: ['Airlinefees', 'Airline', 'Low fare tips'] },
];
