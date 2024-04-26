//your code here
//your code here

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");
  let dragged;

  images.forEach((image) => {
    image.addEventListener("dragstart", function (event) {
      dragged = event.target;
      event.dataTransfer.setData("text/plain", null);
      // Set the data attribute with the background image URL
      event.dataTransfer.setData("text/backgroundImage", window.getComputedStyle(dragged).backgroundImage);
      // Set the data attribute with the innerHTML (text content)
      event.dataTransfer.setData("text/innerHTML", dragged.innerHTML);
    });

    image.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    image.addEventListener("drop", function (event) {
      event.preventDefault();
      if (event.target !== dragged) {
        // Get the background image and innerHTML (text content) from the data attributes
        const draggedBg = event.dataTransfer.getData("text/backgroundImage");
        const draggedHTML = event.dataTransfer.getData("text/innerHTML");
        const dropTargetBg = window.getComputedStyle(event.target).backgroundImage;
        const dropTargetHTML = event.target.innerHTML;

        // Swap the background images
        dragged.style.backgroundImage = dropTargetBg;
        event.target.style.backgroundImage = draggedBg;

        // Swap the innerHTML (text content)
        dragged.innerHTML = dropTargetHTML;
        event.target.innerHTML = draggedHTML;

        // Swap the positions of the dragged and drop target elements
        const parent = event.target.parentNode;
        const draggedIndex = Array.from(parent.children).indexOf(dragged);
        const dropIndex = Array.from(parent.children).indexOf(event.target);
        if (draggedIndex < dropIndex) {
          parent.insertBefore(event.target, dragged.nextSibling);
        } else {
          parent.insertBefore(event.target, dragged);
        }
      }
    });
  });
});
