////// DOM UTILS - see http://youmightnotneedjquery.com/

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function each(parent, selector, fn) {
  var elements = document.querySelectorAll(selector)
  Array.prototype.forEach.call(elements, fn)
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

////// Show/hide content

function showOnly(text) {
  each(document, '.tabs li', function(a) { removeClass(a, 'is-active') })
  var tab = document.querySelector('[data-type="' + text + '"]')
  addClass(tab, 'is-active')
  each(document, ".only", function(only) { addClass(only, 'is-hidden') })
  each(document, ".only-" + text, function(only) { removeClass(only, 'is-hidden') })
}

ready(function() {
  each(document, '.tabs li a', function(a) {
    var text = a.innerHTML
    a.addEventListener('click', function () {
      showOnly(text)
    })
  })

  var firstText = document.querySelector('.tabs li a')
  if(firstText) showOnly(firstText.innerHTML)
})