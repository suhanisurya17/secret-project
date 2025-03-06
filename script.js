function appear(centerSelector, circleSelector, radius) {
  const centerPicture = document.querySelector(centerSelector);
  const circlePictures = document.querySelectorAll(circleSelector);
  circlePictures.forEach((picture, index) => {
    const angle = (index / circlePictures.length) * (2 * Math.PI);
    const x = centerPicture.offsetLeft + radius * Math.cos(angle) - 50;
    const y = centerPicture.offsetTop + radius * Math.sin(angle);
    picture.style.left = `${x}px`;
    picture.style.top = `${y}px`;
    setTimeout(() => {
      picture.classList.add("show");
    }, index * 500);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  appear(".center-picture", ".circle-picture", 250);
});


function goBack() {
    window.location.href= 'main.html';
}

function loadGoogleFont(fontName) {
    let link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

// Example usage
