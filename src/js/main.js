import './helpers/postDate';
// import scrollSmooth from './helpers/smooth-scroll.js';
import reviews from './modules/reviews';

function main() {
  // scrollSmooth();
  reviews();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
}
