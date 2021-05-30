// Intro Animation
// --------------------------
let introAnimation = function(){
  let mainAnimationDelay = 250;
  let mainAnimationTime = 500;// Same as less @intro-main-animation-time
  let lastAnimationTime = mainAnimationDelay + mainAnimationTime + 0;
  
  $('.slider').each(function(index) {
    let thisAnimationStart = 100 * index;
    setTimeout(() => $(this).removeClass('intro'), thisAnimationStart);
  });

  setTimeout(() => $('.landing').removeClass('intro'), mainAnimationDelay);
  setTimeout(() => $('.hero').removeClass('intro'), lastAnimationTime);
}

// Move Images
// - Moves hero images
// -- on mouse move
// --------------------------
let startX = 0, startY = 0;
let moveX = 0, moveY = 0;

let moveHeroImages = function(ev) {
  let currX = ev.pageX;
  let currY = ev.pageY;
  const maxMoveXAllowed = 24;
  const maxMoveYAllowed = 40;

  // and increment or decrement move distance based on direction
  if(startX < currX) moveX++;
  else if(startX > currX) moveX--;
  if(startY < currY) moveY++;
  else if(startY > currY) moveY--;

  // Top cap check
  if(moveX > maxMoveXAllowed) moveX = maxMoveXAllowed;
  if(moveX < -maxMoveXAllowed) moveX = -maxMoveXAllowed;
  if(moveY > maxMoveYAllowed) moveY = maxMoveYAllowed;
  if(moveY < -maxMoveYAllowed) moveY = -maxMoveYAllowed;
  
  // Do the Style
  $('.hero .slider img').css({
    "-webkit-transform":"translate(" + moveX + "px ," + moveY + "px)",
            "transform":"translate(" + moveX + "px ," + moveY + "px)"
  });

  startX = currX;
  startY = currY;
}

// Slide
// - Moves hero slides
// -- on arrow click
// --------------------------
let slideHeroSlides = function() {
  let awaitSlideEnd;
  let slideAnimationTiming = 1000;
  clearTimeout(awaitSlideEnd);

    $('.hero').addClass('sliding')
              .toggleClass('si-1');

    awaitSlideEnd = setTimeout(() => {
      $('.hero').removeClass('sliding');
    }, slideAnimationTiming)
}

// Mobile Menu
// - Toggles the .main-menu on mobile
// --------------------------
let toggleMobileMenu = function() {
   $('.main-menu').toggle('swing');
}

// INI
// ---------------------------
$(document).ready(function(){
  setTimeout(introAnimation, 500);
  $('.hero-inner').on('mousemove', moveHeroImages);
  $('.hero .arrow').on('click', slideHeroSlides);
  $('.menu-toggle').on('click', toggleMobileMenu);
});