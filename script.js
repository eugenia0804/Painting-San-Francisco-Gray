window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var image1 = document.getElementById('sidebarImage1');
  var image2 = document.getElementById('sidebarImage2');
  var containerHeight = document.querySelector('.container').clientHeight;

  if (scrollPosition > containerHeight) {
      image1.style.filter = "grayscale(100%)";
      image2.style.filter = "grayscale(100%)";
  } else {
      image1.style.filter = "none";
      image2.style.filter = "none";
  }
});
