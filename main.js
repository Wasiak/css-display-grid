var $ = function(selector) {
   return document.querySelectorAll(selector);
}
var container = $('#main-container')[0];
var button1 = $('#button-1')[0];
var button2 = $('#button-2')[0];
var button3 = $('#button-3')[0];
var button4 = $('#button-4')[0];

var item1 = $('.item-1')[0];
var item2 = $('.item-2')[0];
var item3 = $('.item-3')[0];
var item4 = $('.item-4')[0];
var item5 = $('.item-5')[0];

var allItems = $('.item');
var items = Array.prototype.slice.call(allItems);

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
  return (data);
}

var removeClasses = function() {
  // var classes = [
  //     'order1, ', 'order2, ', 'order3, ', 'order4'
  //   ];
  // $('.edit-room-panel').removeClass(classes.join(' '));
  container.classList.remove('order1');
  container.classList.remove('order2');
  container.classList.remove('order3');
  container.classList.remove('order4');
}

button1.addEventListener('click', function() {
  items.forEach(setItemPositionAbs);
  removeClasses();

  container.classList.add('order1');
  items.forEach(setNewItemPositionAbs);
});
button2.addEventListener('click', function() {
  items.forEach(setItemPositionAbs);
  removeClasses();

  container.classList.add('order2');
  items.forEach(setNewItemPositionAbs);
});
button3.addEventListener('click', function() {
  items.forEach(setItemPositionAbs);
  removeClasses();

  container.classList.add('order3');
  items.forEach(setNewItemPositionAbs);
});
button4.addEventListener('click', function() {
  // if has order same number sa clicked return
  // block event (click) for all buttons
  items.forEach(setItemPositionAbs);

  removeClasses();
  // add order with same number as button
  container.classList.add('order4');
  items.forEach(setNewItemPositionAbs);
  // unblock event (click)
});

var setItemPositionAbs = function(element) {
  var item = getItemPosition(element);
  var bgColor = window.getComputedStyle(element, null).getPropertyValue("background-color");
  element.classList.add('hidden');
  // cloneNode
  var tempItem = document.createElement('div');
  container.appendChild(tempItem);
  tempItem.classList.add('temp-item');
  tempItem.id = element.id + '-temp';
  tempItem.style.backgroundColor = bgColor;
  tempItem.style.left = item[0] + 'px';
  tempItem.style.top = item[1] + 'px';
  tempItem.style.width = item[2] + 'px';
  tempItem.style.height = item[3] + 'px';
}
var setNewItemPositionAbs = function(element) {
  var item = getItemPosition(element);
  var tempItem = $('#' + element.id + '-temp')[0];
  tempItem.style.left = item[0] + 'px';
  tempItem.style.top = item[1] + 'px';
  tempItem.style.width = item[2] + 'px';
  tempItem.style.height = item[3] + 'px';
  tempItem.addEventListener('transitionend', function() {
    element.classList.remove('hidden');
    container.removeChild(tempItem);
  });
}
