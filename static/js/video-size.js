
// // function resize(){
//     var main = document.getElementsByClassName("game-video");
//     // var video = document.getElementsByClassName("impVideo");
//     // var backVideo = document.getElementsByClassName("backdrop-video");

//     var array=[];
//     for(j=1;j<main.length;j++){
//       var video = document.getElementById("video"+j);
//       array.push(video);
//     }
//     var array2=[];
//     for(k=1;k<main.length;k++){
//       var backVideo = document.getElementById(k+"video");
//       array2.push(backVideo);
//     }
//     function videoResize() {
//       for (var i = 0; i < array.length; i++) {
//         if (array[i].offsetHeight > array[i].offsetWidth) {
//           array[i].setAttribute("style", `max-height: ${main[i].offsetHeight}px;`);
//           array2[i].setAttribute(
//             "style",
//             `min-width: ${main[i].offsetWidth}px;`
//           );
//         } else if (array[i].offsetHeight < array[i].offsetWidth) {
//           array[i].setAttribute("style", `max-width: ${main[i].offsetWidth}px;`);
//           array2[i].setAttribute(
//             "style",
//             `min-height: ${main[i].offsetHeight}px;`
//           );
//         } else if (array[i].offsetHeight == array[i].offsetWidth) {
//           array[i].setAttribute("style", `max-width: ${main[i].offsetWidth}px;`);
//         }
//       }
//     }

//     // setTimeout(videoResize, 100);
//     window.addEventListener("load",videoResize);
//     window.addEventListener("resize",videoResize);
// // }

// // // setTimeout(resize(), 500);


// // function sleep(ms) {
// //   return new Promise(resolve => setTimeout(resolve, ms));
// // }

// // sleep(1000).then(resize());