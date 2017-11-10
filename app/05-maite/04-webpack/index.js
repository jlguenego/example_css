function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

// document.body.appendChild(component());

// var sass = require('node-sass');
// sass.render({
//     file: scss_filename,
//     [, options..]
// }, function (err, result) { /*...*/ });
// // OR
// var result = sass.renderSync({
//     data: scss_content[, options..]
// });