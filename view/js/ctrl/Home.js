/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:27
 */
ctrl.Home = function($scope) {
    $scope.turn = function(status) {
        $scope.status = status;
    };
};

ctrl.Home.path = '/home';
ctrl.Home.url = 'home.html';
ctrl.Home.scripts = ['../js/ctrl/User.js'];
ctrl.Home.deps = ['ctrl.User'];
