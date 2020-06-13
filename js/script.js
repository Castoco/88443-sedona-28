let showbuton = document.querySelector(".booking-button");
let box = document.querySelector(".form-booking");
let arrival = document.querySelector("[name=arrival");
var form = document.querySelector('.booking-field');
var dayout = document.querySelector("[name=checkout]");

showbuton.onclick = function () {
  box.classList.toggle('black-hole');
  box.classList.toggle('bounce');
  arrival.focus();
  box.classList.remove('shake')
};


form.addEventListener("submit", function (evt) {
  if (!arrival.value || !dayout.value) {
    evt.preventDefault();
    console.log(dayout.value)
    box.classList.remove('shake')
    box.offsetWidth = box.offsetWidth;
    box.classList.add('shake')
  }
});
