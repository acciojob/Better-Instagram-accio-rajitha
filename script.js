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
        const tempHTML = event.target.innerHTML;
        event.target.innerHTML = dragged.innerHTML;
        dragged.innerHTML = tempHTML;
      }
    });
  });
});


