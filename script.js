// script.js

// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburgerMenu.setAttribute('aria-expanded', hamburgerMenu.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  hamburgerMenu.classList.toggle('open');
});

// Announcement Bar Close
const announcementBar = document.querySelector('.announcement-bar');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  announcementBar.style.display = 'none';
});

// Form Submission
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add your form submission logic here
    form.reset();
    alert('Thank you for your message!');
  });
});

// Modal Open and Close
const modals = document.querySelectorAll('.modal');
const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('.close-btn');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.querySelector(`#${btn.dataset.modalTarget}`);
    modal.style.display = 'block';
    const modalContent = modal.querySelector('.modal-content');
    modalContent.focus();
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
    const opener = document.querySelector(`[data-modal-target="${modal.id}"]`);
    opener.focus();
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      const opener = document.querySelector(`[data-modal-target="${modal.id}"]`);
      opener.focus();
    }
  });
});

// Keyboard Accessibility
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        const opener = document.querySelector(`[data-modal-target="${modal.id}"]`);
        opener.focus();
      }
    });
  }
});