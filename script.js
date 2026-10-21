const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Demo contact form: validates required fields, then prepares an email in the visitor's email app.
// Replace CONTACT_EMAIL with the practice's real public-facing email address.
const CONTACT_EMAIL = 'hello@example.com';
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Website inquiry: ${data.get('reason')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Inquiry type: ${data.get('reason')}`,
      '',
      'Message:',
      data.get('message'),
      '',
      'Please do not reply with sensitive clinical information by email.'
    ].join('\n');

    if (status) status.textContent = 'Opening your email app. Your message is not stored by this website.';
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
