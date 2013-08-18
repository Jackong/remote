/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:22
 */
angular.module('app.Nav', []).config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl:'home.html', controller:ctrl.Home}).
            when('/recruit', {templateUrl:'recruit.html', controller:ctrl.Recruit}).
            when('/job', {templateUrl:'job.html', controller:ctrl.Job}).
            when('/team', {templateUrl:'team.html', controller:ctrl.Team}).
            when('/individual', {templateUrl:'individual.html', controller:ctrl.Individual}).
            otherwise({redirectTo:'/home'});
    }]
);