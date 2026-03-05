// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '#section-hero' },
  // { name: 'Activate', url: '#' },
  // { name: 'Vincere Reserve One', url: '#' },
  // { name: 'System', url: '#' },
  // { name: 'Team', url: '#' },
  { name: 'Contact', url: '#contact' },
];

const navBarMobileLinks = [
  { name: 'Home', url: '' },
  { name: 'Activate', url: '' },
  { name: 'Explore', url: '' },
  { name: 'Contact', url: '' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Tools & Equipment', url: '/products' },
      { name: 'Construction Services', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  google: 'https://www.google.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
