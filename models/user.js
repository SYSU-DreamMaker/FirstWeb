var bcrypt = require('bcrypt-as-promised');
var debug = require('debug')('dream:user');
var _=require('lodash');

module.exports = function(db) {

	var users = db.collection('users');

	return {
		findUser: function(user) {
			return users.findOne({user: user.name}).then(function(user) {
				return user ? bcrypt.compare(pass, user.pass).then(function() {
					return user;
				}) : Promise.reject("user doesn't exist");
			});
		},

		createUser: function(user) {
			var iteration = 10;
			return bcrypt.hash(user.pass, iteration).then(function(hash) {
				user.pass = hash;
				return users.insert(user);
			});
		},

		checkUser: function(user) {
			return users.findOne(getUnique(user)).then(function(existedUser) {
				//debug("existed user: ", existedUser);
				return existedUser ? Promise.reject("user isn't unique") : Promise.resolve(user);
			});
		}
	};
}

function getUnique(user) {
    return {
        $or: _(user).omit('pass').pairs().map(pairToObject).value()
    };
}

function pairToObject(pair) {
    obj = {};
    obj[pair[0]] = pair[1];
    return obj;
}