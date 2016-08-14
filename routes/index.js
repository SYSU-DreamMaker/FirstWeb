var express = require('express');
var debug = require('debug')('signin:index');

exports.index = function(req, res) {
	res.render('index');
};

exports.other = function (req, res) {
	var name = req.params.name;
	res.render(name);
}