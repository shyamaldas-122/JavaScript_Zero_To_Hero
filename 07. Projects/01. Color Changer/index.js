const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target.id);
    const bgColor = event.target.id;
    body.style.background = bgColor;
  });
});
