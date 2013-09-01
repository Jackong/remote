/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午6:54
 * To change this template use File | Settings | File Templates.
 */
ctrl.Auth = function ($scope, HttpService) {
	$scope.signIn = function () {
		if (!$scope.check()) {
			return;
		}
		HttpService.put("/auth", $scope.params()).success($scope.success);
	};

	$scope.signUp = function () {
		if (!$scope.check()) {
			return;
		}
		HttpService.post("/auth", $scope.params()).success($scope.success);
	};

	$scope.turn = function () {
		$scope.status = !$scope.status;
	};

	$scope.check = function() {
		return (typeof $scope.email != 'undefined'
			&& typeof $scope.password != 'undefined'
			&& $scope.email.length >= 5
			&& $scope.password.length >= 6);
	};
	
	$scope.success = function(data, status) {
		if (data['ok']) {
			$scope.changeView('home');
		} else {
		}
	};

	$scope.params = function() {
		return {
			params: {
				email: $scope.email,
				password: hex_md5($scope.password)
			}
		};
	}
};