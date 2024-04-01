//your code here
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    let draggedImage = null;

    images.forEach(image => {
        image.addEventListener('dragstart', dragStart);
        image.addEventListener('dragend', dragEnd);
        image.addEventListener('dragover', dragOver);
        image.addEventListener('dragenter', dragEnter);
        image.addEventListener('dragleave', dragLeave);
        image.addEventListener('drop', drop);
    });

    function dragStart() {
        draggedImage = this;
        this.classList.add('selected');
    }

    function dragEnd() {
        this.classList.remove('selected');
        draggedImage = null;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    }

    function dragLeave() {
        this.classList.remove('hovered');
    }

    function drop() {
        this.classList.remove('hovered');
        this.parentNode.insertBefore(draggedImage, this);
    }
});
