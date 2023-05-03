const header = document.querySelector(".header");
const altElement = document.querySelector(".shadowed-section");

window.addEventListener("scroll", function() {
  const headerBottom = header.offsetTop + header.offsetHeight;
  const altElementTop = altElement.offsetTop;
  
  if (headerBottom >= altElementTop) {
    header.style.backdropFilter = "blur(10px)";
    header.style.width = "80%";
    header.style.webkitBackdropFilter = "blur(10px)"; 
  } else {
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none"; 
  }
});