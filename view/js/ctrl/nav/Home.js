/**
 * User: Jackong
 * Date: 13-8-18
 * Time: 下午7:27
 */
ctrl.Home = function($scope) {

};

ctrl.Home.path = '/home';
ctrl.Home.url = 'home.html';
ctrl.Home.scripts = ['../js/ctrl/User.js', '../js/lib/hash/md5-min.js'];
ctrl.Home.deps = ['ctrl.User', 'hex_md5'];
