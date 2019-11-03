
// This component is using following library
// https://github.com/verlok/lazyload
import LazyLoad from 'vanilla-lazyload';

const lazyLoadOptions = {
  elements_selector: '.lazy',
  to_webp: true,

  callback_enter: (element) => {
  },
  callback_load: (element) => {
  },
  callback_set: (element) => {
  },
  callback_error: (element) => {
  }
};

const createLazyLoadInstance = () => {
  return new LazyLoad(lazyLoadOptions);
};

export default () => {
  document.addEventListener('DOMContentLoaded', createLazyLoadInstance);
};
