/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:22
 */

app.Nav = angular.module('app.Nav', ['mod.prov']);
app.Nav.config(
    ['RouterProvider', function(RouterProvider) {
        RouterProvider.attach([ctrl.Home, ctrl.Recruit, ctrl.Job, ctrl.Team, ctrl.Individual])
    }]
);

