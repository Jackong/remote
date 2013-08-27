/**
 * User: Jackong
 * Date: 13-8-22
 * Time: 下午11:01
 */
mod.prov.config(['$provide', '$routeProvider', function($provide, $routeProvider) {
    $provide.provider('Router', function() {
        this.attach = function(ctrls) {
            for (var i = 0; i < ctrls.length; i++) {
                var ctrl = ctrls[i];
                this.when(ctrl.path, {templateUrl: ctrl.url, controller:ctrl});
            }
            $routeProvider.otherwise({redirectTo:ctrls[0].path});
            return this;
        };

        this.when = function(path, route) {
            if (typeof route.controller.deps !== 'undefined') {
                var deps = route.controller.deps;
                route.resolve = ['$q', '$timeout', function($q, $timeout) {
                    var defer = $q.defer();
	                var counter = 0;
                    var timer = function() {
	                    var len = deps.length;
                        for (var i = 0; i < len; i++) {
                            if (typeof eval(deps[i]) !== 'undefined') {
                                deps.pop();
                            } else {
                                break;
                            }
                        }
                        if (deps.length == 0) {
                            defer.resolve();
                            return;
                        }
	                    counter++;
	                    if (counter > len * 10) {
		                    return defer.reject();
	                    }
                        $timeout(timer, 20);
                    };
                    timer();
                    return defer.promise;
                }];
            }
            $routeProvider.when(path, route);
            return this;
        };

        this.$get = function() {
            return {};
        }
    });
}]);