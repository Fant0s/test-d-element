document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const successPopup = document.getElementById('successPopup');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '') {
      nameError.textContent = 'Name is required';
      return;
    } else if (emailValue === '') {
      emailError.textContent = 'Email is required';
      return;
    } else if (messageValue === '') {
      messageError.textContent = 'Message is required';
      return;
    }

    setTimeout(function () {
      successPopup.style.display = 'none';
    }, 3000);

    successPopup.style.display = 'block';

    nameInput.value = '';
    emailInput.value = '';
    messageValue.value = '';
  });
});
