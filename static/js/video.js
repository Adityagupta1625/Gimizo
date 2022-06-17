//videoplayer js
const videos = document.getElementsByClassName("impvideo");
// const play_btn = document.querySelectorAll(".play_arrow");
const backvideos = document.getElementsByClassName("backdrop-video");
const play_btn = document.getElementsByClassName("play_arrow");

var z = 0;
// const backvideos= document.getElementsByClassName("backdrop-video");
function newfunc() {
  for (var i = 0; i < videos.length; i++) {
    if (elementInViewport(videos[i])) {
      videos[i].preload = "metadata";
      videos[i + 1].preload = "metadata";
      videos[i + 2].preload = "metadata";
      videos[i + 3].preload = "metadata";
    }
  }
  for (var i = 0; i < backvideos.length; i++) {
    // if (elementInViewport(backvideos[i])) {
      backvideos[i].preload = "metadata";
      backvideos[i + 1].preload = "metadata";
      backvideos[i + 2].preload = "metadata";
      backvideos[i + 3].preload = "metadata";
    // }
  }
  
}
function elementInViewport(videos) {
  var bounding = videos.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // console.log('Element is in the viewport!');
    if (z) {
      videos.play();
    }
    videos.loop = true;
    return 1;
  } else {
    // console.log('Element is NOT in the viewport!');
    videos.pause();
    // return 0;
    videos.loop = false;
    return 0;
  }
}

// window.addEventListener('resize', checkScroll, false);
// function disappearArrow(){
//   if(z==1){
//   for( var r=0;r<play_btn.length;r++){
//   play_btn[r].style.opacity=0;
//   }
// }
// }

function disappearArrow() {
  for (var r = 0; r < play_btn.length; r++) {
    play_btn[r].style.opacity = 0;
    z = 1;
  }
}

// document.addEventListener("click", disappearArrow, (z = 1), false);
document.addEventListener("click", disappearArrow, true);

// document.addEventListener("scroll", disappearArrow, false);
window.addEventListener("click", newfunc, false);
window.addEventListener("scroll", newfunc, false);
