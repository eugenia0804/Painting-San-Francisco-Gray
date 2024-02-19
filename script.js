// Scroll Effect

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var image1 = document.getElementById('sidebarImage1');
  var image2 = document.getElementById('sidebarImage2');
  var containerHeight = document.querySelector('.container').clientHeight;
  var maxScroll = containerHeight; // Adjust this value if needed

  // Calculate grayscale value based on scroll position
  var grayscaleValue = 100 - (scrollPosition / maxScroll) * 100;
  if (grayscaleValue < 0) {
    grayscaleValue = 0; // Ensure grayscale value doesn't go below 0
  }

  // Apply grayscale filter to images
  image1.style.filter = "grayscale(" + grayscaleValue + "%)";
  image2.style.filter = "grayscale(" + grayscaleValue + "%)";
});


// Gallery at the top
let currentImageIndex = 1;

function changeImage(n) {
  currentImageIndex += n;
  if (currentImageIndex > 7) {
    currentImageIndex = 1;
  }
  if (currentImageIndex < 1) {
    currentImageIndex = 7;
  }
  document.getElementById('gallery-img').src = 'images/gallery-' + currentImageIndex + '.jpg';
}

// Automatically change image every 2 seconds
setInterval(function() {
  changeImage(1);
}, 2000);


// Hover effect on map
document.addEventListener("DOMContentLoaded", function() {
  const clickablePoints = document.querySelectorAll('.clickable-point');
  const hoverBoxes = document.querySelectorAll('.hover-box');

  clickablePoints.forEach(function(point) {
      point.addEventListener('click', function(event) {
          const targetId = this.getAttribute('data-target');
          hideAllHoverBoxes();
          document.getElementById(targetId).style.display = 'block';
          event.stopPropagation();
      });
  });

  hoverBoxes.forEach(function(box) {
      box.addEventListener('click', function(event) {
          event.stopPropagation();
      });
  });

  document.addEventListener('click', function() {
      hideAllHoverBoxes();
  });

  function hideAllHoverBoxes() {
      hoverBoxes.forEach(function(box) {
          box.style.display = 'none';
      });
  }
});
