var $ = function(selector) {
   return document.querySelectorAll(selector);
}
var container = $('#main-container')[0];
var button1 = $('#button-1')[0];
var button2 = $('#button-2')[0];
var button3 = $('#button-3')[0];
var button4 = $('#button-4')[0];
var button5 = $('#button-5')[0];

var item1 = $('.item-1')[0];
var item2 = $('.item-2')[0];
var item3 = $('.item-3')[0];
var item4 = $('.item-4')[0];
var item5 = $('.item-5')[0];

var position = function(element) {
  return element.getBoundingClientRect();
}
var getItemPosition = function(element) {
  data = [
    position(element).left,
    position(element).top,
    position(element).width,
    position(element).height
  ];
  // var itemLeft = position(element).left;
  // var itemTop = position(element).top;
  // var itemWidth = position(element).width;
  // var itemHeight = position(element).height
  // console.log(itemLeft, itemTop, itemWidth, itemHeight);
  return (data);
}

button1.addEventListener('click', function() {
    container.classList.remove('order2');
    container.classList.remove('order3');
    container.classList.remove('order4');

    container.classList.add('order1');
    getItemPosition(item1);
});
button2.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order3');
    container.classList.remove('order4');

    container.classList.add('order2');
    getItemPosition(item1);
});
button3.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order2');
    container.classList.remove('order4');

    container.classList.add('order3');
    getItemPosition(item1);
});
button4.addEventListener('click', function() {
    container.classList.remove('order1');
    container.classList.remove('order2');
    container.classList.remove('order3');

    container.classList.add('order4');
    getItemPosition(item1);
});

var setItemPositionAbs = function(element) {
  var item = getItemPosition(element);
  console.log('item position', item);
  element.classList.add('hidden');
  element.style.left = item[0] + 'px';
  element.style.top = item[1] + 'px';
  element.style.width = item[2] + 'px';
  element.style.height = item[3] + 'px';
}
var backToGridPosition = function(element) {
  item1.classList.remove('hidden');
  element.style.left = 'auto';
  element.style.top = 'auto';
  element.style.width = 'auto';
  element.style.height = 'auto';
}

button5.addEventListener('click', function() {
  console.log('elo test');
  // getItemPosition(item1);
  setItemPositionAbs(item1);
  // item1.classList.add('hidden');

  container.classList.remove('order3');
  container.classList.remove('order2');
  container.classList.remove('order4');
  
  item1.addEventListener('transitionend', function() {
    backToGridPosition(item1);
    container.classList.add('order1');
    setItemPositionAbs(item1);
  });
  
  // getItemPosition(item1);
  // item1.classList.remove('hidden');
});
