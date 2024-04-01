//your code here
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedItem = null;

  images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
  });

  function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const droppedItem = event.target;

    // Swap the innerHTML of the dragged and dropped items
    const tempHTML = draggedItem.innerHTML;
    draggedItem.innerHTML = droppedItem.innerHTML;
    droppedItem.innerHTML = tempHTML;
  }
});
