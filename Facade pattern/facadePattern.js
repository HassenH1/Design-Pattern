//The facade pattern hides complex code with easier to use higher level code example jQuery, AJAX

function addEvent(elem, event, func) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + event, func);
  } else {
    elem["on" + event] = func;
  }
}

function removeEvent(elem, event, func) {
  if (elem.removeEventListener) {
    elem.removeEventListener(event, func, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on" + event, func);
  } else {
    elem["on" + event] = null;
  }
}
