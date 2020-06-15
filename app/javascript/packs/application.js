// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import anime from 'animejs/lib/anime.es.js';

import { scrollAppear, smoothScroll } from '../components/page_text'
import { pageAnimation, closeAnimation, homePageAnimation } from '../components/page_animation'
import { profileImgDistortion } from '../components/hover';


document.addEventListener('turbolinks:load', () => {
  window.addEventListener('scroll', scrollAppear);

  const projectBtn = document.querySelector('.projectBtn');
  const contactBtn = document.querySelector('.contactBtn');
  const arrowLink = document.querySelector(".arrowLink");
  const arrow = document.querySelector("#arrow");
  

  // smoothScroll
  if (projectBtn) projectBtn.addEventListener('click', ()=> {
    smoothScroll('.project', 1000);
  })
  if (contactBtn) contactBtn.addEventListener('click', ()=> {
    smoothScroll('.contact', 1000);
  })
  if (arrowLink) arrowLink.addEventListener('click', () => {
    smoothScroll('.project', 1000);
  })


  // arrowLink animation
  // if (arrowLink) arrowLink.addEventListener('mouseover', () => {
  //   anime({
  //     targets: '#arrow',
  //     translateY: 120,
  //     // direction: 'alternate',
  //     loop: true,
  //     easing: 'cubicBezier(.5, .05, .1, .3)'
  //   })
  // })
  // if (arrowLink) arrowLink.addEventListener('mouseout', () => {
  //   arrow.style.transform = "translateY(0)"
  //   anime.remove('#arrow');
  // })

  anime({
    targets: '#arrow',
    translateY: 50,
    duration: 1500,
    loop: true,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })

  // jamin page animation
  pageAnimation();
  

  // profile img distortion effect
  profileImgDistortion();



})
