/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */
ctrl.Nav = function ($scope, $location) {
    $scope.tabs = [
        {id: "/home", name: "首页", scripts:ctrl.Home.scripts},
        {id: "/recruit", name: "招聘"},
        {id: "/job", name: "求职"},
        {id: "/team",  name: "团队"},
        {id: "/individual", name: "个人"}
    ];

    $scope.nav = function (tab) {
        if ($scope.activated) {
            $scope.activated.status = "";
        }
        tab.status = "active";
        $scope.activated = tab;
    };

    $scope.$on('$routeChangeStart', function(event, next) {
        for (var i = 0; i < $scope.tabs.length; i++) {
            if ($scope.tabs[i].id  == $location.path()) {
                $scope.nav($scope.tabs[i]);
                break;
            }
        }
    });
};
