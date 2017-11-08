(function () {
    'use strict';
    var state = false;
    document.addEventListener('DOMContentLoaded', function () {
        console.log('toto', arguments);
        var toggle = document.querySelector('[toggle]');
        var selector = toggle.getAttribute('toggle');
        toggle.addEventListener('click', function () {
            console.log('click');
            var target = document.querySelector(selector);
            console.log('target', target);
            state = !state;
            if (state) {
                target.style.display = 'block';
            } else {
                target.style.display = 'none';
            }
        });
    });
})();