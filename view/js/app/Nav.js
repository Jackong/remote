/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:22
 */

app.Nav = angular.module('app.Nav', ['mod.prov']);
app.Nav.config(
    ['RouterProvider', function(RouterProvider) {
        RouterProvider.
            when('/home',
            {
                templateUrl:'home.html',
                controller:ctrl.Home
            }).
            when('/recruit',
            {
                templateUrl:'recruit.html',
                controller:ctrl.Recruit
            }).
            when('/job',
            {
                templateUrl:'job.html',
                controller:ctrl.Job
            },
            ['ctrl.Job']).
            when('/team',
            {
                templateUrl:'team.html',
                controller:ctrl.Team
            }).
            when('/individual',
            {
                templateUrl:'individual.html',
                controller:ctrl.Individual
            }).
            otherwise({redirectTo:'/home'});
    }]
);

