var container = document.getElementById('main-container');
var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var button3 = document.getElementById('button-3');
button1.addEventListener('click', function() {
  // if (container.classList.contains('order1')) {
    container.classList.remove('order2');
    container.classList.remove('order3');
  // } else {
    container.classList.add('order1');
  // }
});
button2.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order3');

    container.classList.add('order2');
});
button3.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order2');

    container.classList.add('order3');
});
