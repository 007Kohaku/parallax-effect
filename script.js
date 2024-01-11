let layer1 = document.querySelector(".layer-1");
let layer2 = document.querySelector(".layer-2");
let layer3 = document.querySelector(".layer-3");
let layer4 = document.querySelector(".layer-4");
let layer5 = document.querySelector(".layer-5");

window.onscroll = function () {
  let Y = window.scrollY;
  layer1.style.transform = "translateY(" + Y / 1.5 + "px)";
  layer2.style.transform = "translateY(" + Y / 2 + "px)";
  layer3.style.transform = "translateY(" + Y / 1.5 + "px)";
  layer4.style.transform = "translateY(" + Y / 2 + "px)";
  layer5.style.transform = "translateY(" + Y / 3 + "px)";
};
