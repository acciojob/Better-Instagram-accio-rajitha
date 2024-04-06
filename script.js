//your code here
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");
  let dragged;

  images.forEach((image) => {
    image.addEventListener("dragstart", function (event) {
      dragged = event.target;
      event.dataTransfer.setData("text/plain", null);
    });

    image.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    image.addEventListener("drop", function (event) {
      event.preventDefault();
      if (event.target !== dragged) {
        // Get background images
        const draggedBg = window.getComputedStyle(dragged).backgroundImage;
        const targetBg = window.getComputedStyle(event.target).backgroundImage;

        // Swap background images
        dragged.style.backgroundImage = targetBg;
        event.target.style.backgroundImage = draggedBg;
      }
    });
  });
});
