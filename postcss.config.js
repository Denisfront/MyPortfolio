import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  map: false,
  plugins: {
    'postcss-plugin': {
      postcssNested,
      autoprefixer,
    },
  },
};
