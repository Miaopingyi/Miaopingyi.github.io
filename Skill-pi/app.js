'use strict';
const dialog = document.querySelector('#image-dialog');
const dialogImage = document.querySelector('#dialog-image');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click',() => {
  dialogImage.src = button.dataset.image;
  dialogImage.alt = button.dataset.alt;
  dialog.classList.toggle('paper-dialog', button.dataset.kind === 'paper');
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.scrollLeft = 0;
}));
dialog.querySelector('.dialog-close').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
const menu = document.querySelector('.research-menu');
document.addEventListener('click',event => {
  if (!menu.contains(event.target)) menu.open = false;
});
document.addEventListener('keydown',event => {
  if (event.key === 'Escape') menu.open = false;
});
