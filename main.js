var $ = function(selector) {
   return document.querySelectorAll(selector);
}
var container = $('#main-container')[0];
var buttonPanel = $('#panel')[0];

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
var buttons = Array.prototype.slice.call($('.button'));

var position = function(element) {
  return element.getBoundingClientRect();
}
var getItemPosition = function(element) {
  data = {
    left: position(element).left,
    top: position(element).top,
    width: position(element).width,
    height: position(element).height
  }
  return (data);
}

var removeClasses = function() {
  container.classList.remove('order1', 'order2', 'order3', 'order4');
}

var setNewOrder = function(number) {
  if (container.classList.contains('order' + number)) return;
  buttonPanel.classList.add('disabled');
  items.forEach(setItemPositionAbs);
  removeClasses();
  container.classList.add('order' + number);
  items.forEach(setNewItemPositionAbs);
}

var addButtonsListeners = function() {
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function(evt) {
    var orderNumber = evt.target.id.split('-')[1];
      setNewOrder(orderNumber);
    });
  });
}();

var setItemPositionAbs = function(element) {
  var item = getItemPosition(element);
  var bgColor = window.getComputedStyle(element, null).getPropertyValue("background-color");
  element.classList.add('hidden');
  // cloneNode
  // var tempItem = element.cloneNode(true);
  var tempItem = document.createElement('div');
  container.appendChild(tempItem);
  tempItem.classList.add('temp-item');
  tempItem.id = element.id + '-temp';
  tempItem.style.backgroundColor = bgColor;
  tempItem.style.left = item.left + 'px';
  tempItem.style.top = item.top + 'px';
  tempItem.style.width = item.width + 'px';
  tempItem.style.height = item.height + 'px';
}
var setNewItemPositionAbs = function(element) {
  var item = getItemPosition(element);
  var tempItem = $('#' + element.id + '-temp')[0];
  tempItem.style.left = item.left + 'px';
  tempItem.style.top = item.top + 'px';
  tempItem.style.width = item.width + 'px';
  tempItem.style.height = item.height + 'px';
  tempItem.addEventListener('transitionend', function() {
    element.classList.remove('hidden');
    container.removeChild(tempItem);
    buttonPanel.classList.remove('disabled');
  });
}
