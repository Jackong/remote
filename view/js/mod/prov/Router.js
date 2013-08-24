/**
 * User: Jackong
 * Date: 13-8-22
 * Time: 下午11:01
 */
mod.prov.config(['$provide', '$routeProvider', function($provide, $routeProvider) {
    $provide.provider('Router', function() {
        this.when = function(path, route) {
            if (typeof route.controller.deps !== 'undefined') {
                var deps = route.controller.deps;
                route.resolve = ['$q', '$timeout', function($q, $timeout) {
                    var defer = $q.defer();
                    var timer = function() {
                        for (var i = 0; i < deps.length; i++) {
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
                        $timeout(timer, 20);
                    };
                    timer();
                    return defer.promise;
                }];
            }
            $routeProvider.when(path, route);
            return this;
        };

        this.otherwise = function(route) {
            $routeProvider.otherwise(route);
            return this;
        };

        this.$get = function() {
            return {};
        }
    });
}]);