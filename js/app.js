const images = document.querySelectorAll('#slideshow-container img');
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
let currentIndex = 0;

playButton.addEventListener('click', () => {
  showImage(currentIndex);
  startSlideshow();  
  audio.play();
});

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    setInterval(nextImage, 5000); // Change image every 5 seconds (adjust as needed)
}
   
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker nao registrado", err))
    })
  }