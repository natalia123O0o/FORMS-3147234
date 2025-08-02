import { showModal, hideModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  const closeBtn = document.getElementById('close-modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    showModal(); // Show the modal on form submission
    form.reset(); // Reset the form fields
  });

  closeBtn.addEventListener('click', () => {
    hideModal(); // Hide the modal on close button click
  });
});
