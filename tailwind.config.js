const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode:'jit',
  purge: [
    '*/safelist.txt',
    './*.html',
    './**/*.liquid',
    './assets/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'wu-nav':'var(--nav,#0055FF)',
        'wu-red':'var(--red,#DD343B)',
        'wu-green':'var(--green,#009444)',
        'wu-blue':'var(--blue,#0055D6)',
        'wu-yellow':'var(--yellow,#FBCC03)',
        'wu-turquoise':'var(--turquoise,#1BBDBD)',
        'wu-brown':'var(--brown,#D6C8AB)',
        'wu-gray':'var(--gray,#BBBBBB)',
        'wu-white':'var(--white,#FFFFFF)',
        'wu-black':'var(--black,#000000)'
      },
      fontFamily:{
        sans:['apercu-condensed',...defaultTheme.fontFamily.sans],
        serif:['gt-alpina',...defaultTheme.fontFamily.serif],
      },
      borderRadius:{
        'wu':'4rem'
      },
      transitionProperty:{
        'border-radius': 'border-radius'
      }
    },
  },
  variants: {
      //scrollSnapType:['responsive']
      extend: {
      transitionProperty:['hover','focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-scroll-snap')
  ],
}
