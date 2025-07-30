document.addEventListener('DOMContentLoaded', function() {
  let cardToggles = document.getElementsByClassName('card-toggle');
  for (let i = 0; i < cardToggles.length; i++) {
    cardToggles[i].addEventListener('click', e => {
      if(e.currentTarget.childNodes[1].className === "fa fa-angle-down")
        e.currentTarget.childNodes[1].className = "fa fa-angle-up";
      else
        e.currentTarget.childNodes[1].className = "fa fa-angle-down";
      e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
    });
  }
});

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
