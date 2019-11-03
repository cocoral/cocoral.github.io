import './style/main.scss';

import test from './js/test.js';
import lazyload from './js/lazyload-init.js';

test();
lazyload();

require.context('./views/', true);

if (module.hot) {
  module.hot.accept();
}
