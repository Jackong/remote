/**
 * Created with JetBrains WebStorm.
 * User: Chain
 * Date: 13-8-17
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */

function Nav($scope) {
    $scope.tabs = [
        {id:"home", status:"active", name:"首页", url:"home.html"},
        {id:"recruit", status:"", name:"招聘", url:"recruit.html"},
        {id:"job", status:"", name:"求职", url:"job.html"},
        {id:"team", status:"", name:"团队", url: "team.html"},
        {id:"individual", status:"", name:"个人", url: "individual.html"}
    ];

    $scope.nav = function(tab) {
        if ($scope.actived) {
            $scope.actived.status = "";
        }
        tab.status = "active";
        $scope.actived = tab;
        $scope.url = $scope.actived.url;
    };

    $scope.nav($scope.tabs[0]);
}