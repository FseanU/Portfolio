import { gsap } from 'gsap';
// jamin page animation open page 
function pageAnimation(){
  const year = document.querySelector('.year');
  const title = document.querySelector('.project-info h1');
  const overview = document.querySelector('.overview');
  const descr01 = document.querySelector('.descr-01');
  let tl = gsap.timeline();
  if (year) tl.fromTo( ".line", {width: "0%"}, {width: "100%", ease: "power1.in"})
    .fromTo(year, {opacity: "0%"}, {opacity: "100%", duration:0.5, ease: "power2.in"})
    .fromTo(title, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0")
    .fromTo(overview, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0.5")
    .fromTo(descr01, {opacity: "0%"}, {opacity: "100%", ease: "power2.in"}, "<0");

}

// jamin page animation close page 
function closeAnimation() {
  const year = document.querySelector('.year');
  const title = document.querySelector('.project-info h1');
  const overview = document.querySelector('.overview');
  const descr01 = document.querySelector('.descr-01');
  let tl = gsap.timeline();
  if (year) tl.fromTo( ".line", {width: "100%"}, {width: "0%", ease: "power1.in"})
    .fromTo(year, {opacity: "100%"}, {opacity: "0%", duration:0.5, ease: "power2.in"})
    .fromTo(title, {opacity: "100%"}, {opacity: "0%", ease: "power2.in"}, "<0")
    .fromTo(overview, {opacity: "100%"}, {opacity: "0%", ease: "power2.in"}, "<0.5")
    .fromTo(descr01, {opacity: "100%"}, {opacity: "0%", ease: "power2.in"}, "<0");
}

// home page animation open page
function homePageAnimation () {
  const intro = document.querySelector(".intro");
  let tl = gsap.timeline();
  if (intro) tl.fromTo( intro, {opacity: "0%"}, {opacity: "100%", ease: "power1.in"});
}

export { pageAnimation, closeAnimation, homePageAnimation };