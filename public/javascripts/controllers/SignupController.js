function SignupController($scope, $http) {

	
	$scope.users = [];
  
	$scope.newUser = {
			username : 'mohan',
			password : 'pwd'
	};

	$scope.setUser = function(users) {

		$scope.users = users;
	};

	  $scope.addNewUser = function() {
		    $http.post('/user.json', $scope.newUser).success(function(data) {
		      if (data.user) {
		        $scope.users.push(data.user);
		      } else {
		        alert(JSON.stringify(data));
		      }
		    });
		  };
	



}
