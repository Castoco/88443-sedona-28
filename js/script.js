let showbuton = document.querySelector(".booking-button");
let box = document.querySelector(".form-booking");
let arrival = document.querySelector("[name=arrival");
var form = document.querySelector('.booking-field');
var dayout = document.querySelector("[name=checkout]");

showbuton.addEventListener('click', function () {
  box.classList.toggle('black-hole');
  arrival.focus();
  box.classList.remove('shake')
});


form.addEventListener("submit", function (evt) {
  if (!arrival.value || !dayout.value) {
    evt.preventDefault();
    box.classList.remove('shake')
    box.offsetWidth = box.offsetWidth;
    box.classList.add('shake')
  }
});


