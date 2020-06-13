let showbuton = document.querySelector(".booking-button");
let box = document.querySelector(".form-booking");
let arrival = document.querySelector("[name=arrival")
var form = document.querySelector('.booking-field')

showbuton.onclick = function () {
  box.classList.toggle('black-hole')
  box.classList.toggle('bounce')
  arrival.focus();
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log('Получилось!');
  console.log(arrival.value);
});
