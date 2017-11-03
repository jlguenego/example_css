(function() {
    'use strict';

    var input = document.querySelector('input');

    input.addEventListener('input', computePriority);

    function computePriority() {
        var value = input.value;
        console.log('input', value);
        var a = 0;
        console.log('a', a);
        var b = extractId(value);
        console.log('b', b);
        var c = extractClassAndAttr(value);
        console.log('c', c);

    }

    function extractId(str) {
        var result = str.replace(/[^#]/g, '').length;
        return result;
    }

    function extractClassAndAttr(str) {
        var result = 0;
        str.replace(/\[.*?\]/g, function() {
            result++;
        }).length;
        return result;
    }
})();