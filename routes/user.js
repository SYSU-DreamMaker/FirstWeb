var express = require('express');
var debug = require('debug')('signin:index');
var router = express.Router();

module.exports = function(db) {
	var userManager = require('../models/user')(db);

	router.post('/user_signup', function(req, res) {
		userManager.checkUser(req.body)
			.then(userManager.createUser)
			.then(function() {
				res.json({
					err: ''
				});
			})
			.catch(function(error) {
				res.json({
					err: error
				});
			});

		console.log(req.body);
	});

	router.post('/user_login', function(req, res) {
		userManager.findUser(req.body)
			.then(function(user) {
				res.json({
					user: user,
					err: ''
				});
			})
			.catch(function(error) {
				res.json({
					err: error
				});
			});

		console.log(req.body);
	});

	return router;
}