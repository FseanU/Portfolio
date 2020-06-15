// import * as THREE from 'three';
import hoverEffect from 'hover-effect'
import side from 'images/profile-side.png'
import front from 'images/profile-front.png'
import diss from 'images/diss.png'

function profileImgDistortion (){
  new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.1,
    image1: side,
    image2: front,
    displacementImage: diss,
    speedIn: 2,
    speedOut: 2,
  })
}

export { profileImgDistortion };