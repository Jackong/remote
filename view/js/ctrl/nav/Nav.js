/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */
ctrl.Nav = function ($scope, $location) {
    $scope.tabs = [
        {path: ctrl.Home.path, name: "首页", scripts:ctrl.Home.scripts},
        {path: ctrl.Recruit.path, name: "招聘", scripts:ctrl.Recruit.scripts},
        {path: ctrl.Job.path, name: "求职", scripts:ctrl.Job.scripts},
        {path: ctrl.Team.path,  name: "团队", scripts:ctrl.Team.scripts},
        {path: ctrl.Individual.path, name: "个人", scripts:ctrl.Individual.scripts}
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
            if ($scope.tabs[i].path  == $location.path()) {
                $scope.nav($scope.tabs[i]);
                break;
            }
        }
    });
};
