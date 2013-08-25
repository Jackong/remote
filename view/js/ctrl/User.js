/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午6:54
 * To change this template use File | Settings | File Templates.
 */
ctrl.User = function($scope, $http) {
    $scope.signIn = function () {
        if ($scope.email.length <= 0 || $scope.password.length < 6) {
            return;
        }
        $http.post("/auth",
            {
                params: {
                    "email": $scope.email,
                    "password": $scope.password,
                    "rememberMe": $scope.rememberMe
                }
            })
            .success(function (data, status) {
            }
        );
    };

    $scope.signUp = function () {
        if ($scope.email.length <= 0 || $scope.password.length < 6 || $scope.password != $scope.repassword) {
            return;
        }
        $http.put("/user",
            {
                params: {
                    "email": $scope.email,
                    "password": $scope.password
                }
            })
            .success(function (data, status) {
            }
        );
    };

    $scope.turn = function() {
        $scope.status = !$scope.status;
    }
};