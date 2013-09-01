/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午6:54
 * To change this template use File | Settings | File Templates.
 */
ctrl.User = function ($scope, HttpService) {
	$scope.signIn = function () {
		if ($scope.email.length <= 0 || $scope.password.length < 6) {
			return;
		}
		HttpService.post("/auth",
			{
				email: $scope.email,
				password: $scope.password
			})
			.success(function (data, status) {
			}
		);
	};

	$scope.signUp = function () {
		if ($scope.email.length <= 0 || $scope.password.length < 6) {
			return;
		}
		HttpService.post("/user",
			{params: {
				email: $scope.email,
				password: hex_md5($scope.password)
			}})
			.success(function (data, status) {
			}
		);
	};

	$scope.turn = function () {
		$scope.status = !$scope.status;
	}
};