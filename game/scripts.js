import { svg1 } from './svg/svg1.js';
import { svg2 } from './svg/svg2.js';
import { svg3 } from './svg/svg3.js';

let selectedColor = null; // Define selectedColor globally
let svgContainer = null;
let svg = null;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('svg-container');
    if (!container) {
      console.error("SVG container not found in the HTML document.");
      return;
    }
  
    const svgs = [svg1, svg2, svg3];
    let currentIndex = 0;
  
    // Initialize container with the first SVG content
    container.innerHTML = svgs[currentIndex];
    console.log(`SVG ${currentIndex + 1} content loaded into container`);
  
    const switchBtn = document.getElementById('switch-btn');
    switchBtn.addEventListener('click', function() {
      // Increment the index, looping back to 0 if at the end
      currentIndex = (currentIndex + 1) % svgs.length;
      console.log(`Switching to SVG ${currentIndex + 1}`);
  
      // Load and display the next SVG
      container.innerHTML = svgs[currentIndex];
      console.log(`SVG ${currentIndex + 1} content loaded into container`);

      initializeSVG();
    });

    // Initialize SVG elements initially
    initializeSVG();
});

function initializeSVG() {
    const coloredCircles = document.querySelectorAll(".colored-circles .circle");
    console.log("SVG Circles:", coloredCircles);
    const svgContainer = document.getElementById("svg-container");
    console.log("SVG Container:", svgContainer);
    const svg = svgContainer.querySelector("svg");
    const svgElements = svg.querySelectorAll("[class^='cls-']");
    console.log("SVG Elements:", svgElements);

    let selectedClass = null; // Track the selected class

    function handleCircleClick(event) {
        // Remove outline from previously selected circle
        coloredCircles.forEach(circle => {
            circle.classList.remove('selected');
        });
    
        // Highlight the clicked circle with a black outline
        this.classList.add('selected');
    
        // Get the computed style of the clicked circle to retrieve the background color
        const computedStyle = window.getComputedStyle(this);
        selectedColor = computedStyle.backgroundColor; // Set selectedColor globally
    
        // Debugging: Log selected color
        console.log("Selected color:", selectedColor);
    }

    function handleSVGElementClick(event) {
        console.log("handleSVGElementClick Called");
        // Get the class of the clicked SVG element
        const clickedClass = this.getAttribute('class');
    
        if (clickedClass && clickedClass.startsWith('cls-')) {
            // Set the clicked class as the selected class
            selectedClass = clickedClass;
    
            // Debugging: Log the selected class
            console.log("Selected class:", selectedClass);
    
            // Change the fill color of the clicked SVG element
            this.style.fill = selectedColor;
    
            // Debugging: Log the selected color
            console.log("Selected color:", selectedColor);
    
            // Apply the selected color to all elements with the same class
            const elementsWithSameClass = document.querySelectorAll('.' + selectedClass);
            elementsWithSameClass.forEach(function(element) {
                element.style.fill = selectedColor;
                console.log("Selected element:", element)
            });
        }
    }
    

    // Add click event listeners to colored circles
    coloredCircles.forEach(circle => {
        circle.addEventListener("click", handleCircleClick);
    });

    svgElements.forEach(element => {
        element.addEventListener("click", handleSVGElementClick);
    });
};




// Function to download a blob
function download(filename, blob) {
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

// Function to handle the download when save-btn is clicked
function handleDownloadButtonClick() {
    // Get the SVG element
    var svg = document.getElementById('svg-container');

    // Serialize SVG to string
    var svgString = (new XMLSerializer()).serializeToString(svg);

    // Create a canvas element
    var canvas = document.createElement('canvas');

    // Render SVG to canvas using canvg
    canvg(canvas, svgString, {
        renderCallback: function() {
            // Convert canvas to blob
            canvas.toBlob(function(blob) {
                // Initiate download of blob
                download('MyHouse.png', blob);
            });
        }
    });
}

// Add click event listener to save-btn to trigger the download
document.getElementById('save-btn').addEventListener('click', handleDownloadButtonClick);
