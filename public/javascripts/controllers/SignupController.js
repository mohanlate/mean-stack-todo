function SignupController($scope, $http) {
  $scope.user = {};
  $scope.newUser = {
    username : 'mohan',
    password : 'pwd'
  };

  $scope.setUser = function(user) {
    $scope.user = user;
  };

  $scope.update = function(user) {
    $http.put('/user/' + user._id + '.json', user).success(function(data) {
      if (!data.user) {
        alert(JSON.stringify(data));
      }
    });
  };

/*
  $scope.getUser = function() {
    $http.get('/user.json').success(function(data) {
      $scope.user = data.user;
    });
  };
*/

/*
  setInterval(function() {
    $scope.updateList();
    $scope.$apply();
  }, 30 * 60 * 1000); // update every 30 minutes;

  $scope.updateList();
*/

  $scope.addNewUser = function() {
    $http.post('/user.json', $scope.newUser).success(function(data) {
      if (data.user) {
        alert('Registration complete!');
      } else {
        alert(JSON.stringify(data));
      }
    });
  };
}
