function fitToContainer(canvas) {
  // Make it visually fill the positioned parent
  canvas.style.width ='90%';
  canvas.style.height='90%';
  // ...then set the internal size to match
  // canvas.width  = canvas.offsetWidth;
  // canvas.height = canvas.offsetHeight;
  // console.log(canvas.width);
}

function lineBreak () {
  const h1 = document.querySelector('.about-descr h1');
  h1.innerHTML = "<h1 style='line-height: 3rem;'>A little <br>about me</h1>";
}

export { fitToContainer, lineBreak };