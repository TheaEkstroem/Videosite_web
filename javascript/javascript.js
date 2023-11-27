/* slideshow */

var img = document.getElementById("img");

var slides = [
  "Billeder/landscape_far_langt.jpeg",
  "Billeder/landscape_farsidder.jpeg",
  "Billeder/landscape_ipad.jpeg",
  "Billeder/landscape_farsidder_væk.jpeg",
  "Billeder/IMG_4668.jpeg",
];

var Start = 0;

var Start = 0;

function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider, 4000);
