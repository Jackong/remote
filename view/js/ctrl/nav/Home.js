/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:27
 */
ctrl.Home = function($scope) {
	$scope.changeView = function(view) {
		$scope.view = view;
	};
};

ctrl.Home.path = '/home';
ctrl.Home.url = 'html/home.html';
ctrl.Home.scripts = ['../js/ctrl/Auth.js', '../js/lib/hash/md5-min.js'];
ctrl.Home.deps = ['ctrl.Auth', 'hex_md5'];
