'use strict';

const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');
const process = require('process');

process.chdir(__dirname);

const app = express();

app.get('/main.js', function (req, res, next) {
	setTimeout(function () {
		res.sendFile('main.js', {
			root: '.'
		});
	}, 2000);
});

app.get('/main2.js', function (req, res, next) {
	setTimeout(function () {
		res.sendFile('main2.js', {
			root: '.'
		});
	}, 3000);
});

app.get('/style.css', function (req, res, next) {
	setTimeout(function () {
		res.sendFile('style.css', {
			root: '.'
		});
	}, 4000);
});

app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});