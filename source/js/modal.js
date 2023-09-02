document.getElementById('message').value = '';
const textarea = document.getElementById('message');
const modal = document.querySelector('.modal-container');
textarea.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});

document.onclick = function (event) {
  if (event.target === modal) {
    modal.classList.remove('modal-container--open');
    document.body.classList.remove('no-scroll');
  }
};

function talkBtn() {
  const btn = document.querySelector('.btn-talk');
  const modal = document.querySelector('.modal-container');

  btn.onclick = function () {
    modal.classList.toggle('modal-container--open');
    document.body.classList.toggle('no-scroll');
  };
}

function closeBtn() {
  const btn = document.querySelector('.close-btn');
  const modal = document.querySelector('.modal-container');

  btn.onclick = function () {
    modal.classList.remove('modal-container--open');
    document.body.classList.remove('no-scroll');
  };
}

closeBtn();
export default talkBtn();
