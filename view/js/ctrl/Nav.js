/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */
ctrl.Nav = function ($scope) {
    $scope.tabs = [
        {id: "home", status: "active", name: "首页", scripts:['../js/ctrl/User.js']},
        {id: "recruit", status: "", name: "招聘"},
        {id: "job", status: "", name: "求职"},
        {id: "team", status: "", name: "团队"},
        {id: "individual", status: "", name: "个人"}
    ];

    $scope.nav = function (tab) {
        if ($scope.actived) {
            $scope.actived.status = "";
        }
        tab.status = "active";
        $scope.actived = tab;
    };
    $scope.nav($scope.tabs[0]);
};
