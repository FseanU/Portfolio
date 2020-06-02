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
import { gsap } from 'gsap';
import { scrollAppear, smoothScroll } from '../components/page_text'

document.addEventListener('turbolinks:load', () => {
  window.addEventListener('scroll', scrollAppear);

  const projectBtn = document.querySelector('.projectBtn');
  const contactBtn = document.querySelector('.contactBtn');
  const arrowLink = document.querySelector(".arrowLink");
  const arrow = document.querySelector("#arrow");
  const year = document.querySelector('.year');
  const title = document.querySelector('.project-info h1');
  const overview = document.querySelector('.overview');
  const descr01 = document.querySelector('.descr-01');
  

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
  if (arrowLink) arrowLink.addEventListener('mouseover', () => {
    anime({
      targets: '#arrow',
      translateY: 120,
      // direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    })
  })
  if (arrowLink) arrowLink.addEventListener('mouseout', () => {
    arrow.style.transform = "translateY(0)"
    anime.remove('#arrow');
  })

  // jamin page animation
  let tl = gsap.timeline();
  if (year) tl.fromTo( ".line", {width: "0%"}, {width: "100%", duration: 1, ease: "power1.in"})
    .fromTo(year, {opacity: "0%"}, {opacity: "100%", duration:1, ease: "power2.in"})
    .fromTo(title, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0")
    .fromTo(overview, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0.5")
    .fromTo(descr01, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0");

})
