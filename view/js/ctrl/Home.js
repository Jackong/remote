/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:27
 */
ctrl.Home = function($scope) {
};

ctrl.Home.Resolve = function($q, $timeout, $route) {
    console.log($route.current);
    var defer = $q.defer();
    timer = function() {
        if (typeof ctrl.User !== 'undefined') {
            defer.resolve();
        } else {
            console.log('continue');
            $timeout(timer, 10);
        }
    };
    timer();
    return defer.promise;
};