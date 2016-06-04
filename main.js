var container = document.getElementById('main-container');
var button1 = document.getElementById('button-1');
button1.addEventListener('click', function() {
  if (container.classList.contains('order1')) {
    container.classList.remove('order1');
  } else {
    container.classList.add('order1');
  }
});
