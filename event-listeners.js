const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello!");
});