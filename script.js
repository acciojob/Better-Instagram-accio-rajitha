//your code here
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  images.forEach((image) => {
    // Add event listener for dragstart
    image.addEventListener("dragstart", function (event) {
      dragged = event.target;
      event.dataTransfer.setData("text/plain", null);
    });

    // Add event listener for dragover
    image.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    // Add event listener for drop
    image.addEventListener("drop", function (event) {
      event.preventDefault();
      if (event.target !== dragged) {
        const tempHTML = event.target.innerHTML;
        event.target.innerHTML = dragged.innerHTML;
        dragged.innerHTML = tempHTML;
      }
    });
  });
});
