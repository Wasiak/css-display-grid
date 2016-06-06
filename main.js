var $ = function(selector) {
   return document.querySelectorAll(selector);
}
var container = $('#main-container')[0];
var button1 = $('#button-1')[0];
var button2 = $('#button-2')[0];
var button3 = $('#button-3')[0];
var button4 = $('#button-4')[0];
button1.addEventListener('click', function() {
    container.classList.remove('order2');
    container.classList.remove('order3');
    container.classList.remove('order4');

    container.classList.add('order1');
});
button2.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order3');
    container.classList.remove('order4');

    container.classList.add('order2');
});
button3.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order2');
    container.classList.remove('order4');

    container.classList.add('order3');
});
button4.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order2');
    container.classList.remove('order3');

    container.classList.add('order4');
});
