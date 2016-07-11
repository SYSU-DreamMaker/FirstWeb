var express = require('express');
var debug = require('debug')('signin:index');
var router = express.Router();

exports.index = function(req, res) {
	res.render('index');
};

exports.other = function (req, res) {
	var name = req.params.name;
	res.render(name);
}