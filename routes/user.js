
/*
 * GET users listing.
 */

/*exports.list = function(req, res){
  res.send("List of users who have tasks:");
};
*/


exports.list = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.render('user', {
        title: 'List of users',
        todos: todos
      }); 
    });
  };
};



