/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:22
 */

app.Nav = angular.module('app.Nav', ['mod.prov', 'mod.service']);
app.Nav.config(
    ['RouterProvider', "$interpolateProvider", function(RouterProvider, $interpolateProvider) {
	    $interpolateProvider.startSymbol("[[");
	    $interpolateProvider.endSymbol("]]");
        RouterProvider.attach([ctrl.Home, ctrl.Recruit, ctrl.Job, ctrl.Team, ctrl.Individual])
    }]
);

