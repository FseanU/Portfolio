import { start } from "@rails/activestorage";

function scrollAppear() {
  const descrTexts = document.querySelectorAll(".descr-text");
  // const descrPosition = descrText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight/1.5;
  descrTexts.forEach( (text) => {
    if (text.getBoundingClientRect().top < screenPosition) {
      text.classList.add('descr-appear');
    }
  });
  
}

function smoothScroll(target, duration){
  const target1 = document.querySelector(target);
  const targetPosition = target1.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime){
    if (startTime === null ) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed,startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration ) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
  };

  requestAnimationFrame(animation);
}

// arrow animation




export { scrollAppear, smoothScroll };