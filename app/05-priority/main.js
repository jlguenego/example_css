(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', computePriority);
    document.querySelector('input').addEventListener('input', computePriority);

    function computePriority() {
        var value = input.value;
        console.log('input', value);
        var a = 0;
        console.log('a', a);
        var b = extractId(value);
        console.log('b', b);
        var c = extractClassAndAttr(value);
        console.log('c', c);
        var d = extractElementAndPseudoElement(value);
        console.log('d', d);
        document.querySelector('priority').innerHTML = `${a}${b}${c}${d}`;
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
        str.replace(/\./g, function() {
            result++;
        }).length;
        str.replace(/:[^:]/g, function() {
            result++;
        }).length;
        return result;
    }

    function extractElementAndPseudoElement(str) {
        var result = 0;
        str.replace(/::[a-zA-z_-]+/g, function() {
            result++;
        }).length;
        str.replace(/^[a-zA-z_0-9-]+/g, function() {
            result++;
        }).length;
        str.replace(/[> ]+[a-zA-z_0-9-]+/g, function() {
            result++;
        }).length;
        return result;
    }
})();