/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午6:54
 * To change this template use File | Settings | File Templates.
 */
ctrl.User = function($scope, $http) {
    $scope.remember = true;
    $scope.login = function () {
        $http.get("/login",
            {
                params: {
                    "email": $scope.email,
                    "password": $scope.password,
                    "rememberMe": $scope.rememberMe
                }
            })
            .success(function (data, status) {
                $scope.isLogin = true;
            }
        );
    };

    $scope.register = function () {
    };
};