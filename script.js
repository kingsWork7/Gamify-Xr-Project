'use strict';
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// const img = document.querySelector('picture-track');

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

for (let i = 0; i < btnCloseModal.length; i++) {
    btnCloseModal[i].addEventListener('click', function () {
      modal[i].classList.add('hidden');  
      overlay.classList.add('hidden');
    });
  }


overlay.addEventListener('click', function () {
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
});

// TO STOP AND PLAY SCENE PHOTO ANIMATION

const track = document.querySelector('.picture-track');

track.addEventListener('mouseenter', function () {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', function () {
  track.style.animationPlayState = 'running';
});
