
exports.register = function (req, res) {
//  res.send("This is the registration page for Earth Eyes. Full form coming soon.");

  res.render('signup', {title : 'Register now!'});
};


/*
exports.register = function() {
  return function(req, res) {
    res.render('signup',{} );
  };

};
*/
