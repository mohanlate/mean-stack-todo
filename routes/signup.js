/*
exports.register = function (req, res) {
  res.render('signup', {title : 'Signup now!'});
};
*/

exports.register = function(User) {
	  return function(req, res) {
	    User.find({}, function(error, users) {
	      res.render('signup', {
	        title: 'Express',
	        users : users
	      });
	    });
	  };
	};
