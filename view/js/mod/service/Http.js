/**
 * User: Jackong
 * Date: 13-8-27
 * Time: 下午8:58
 */

mod.service.factory("HttpService", function($http) {
	$http.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	var config = {
		transformRequest: function(obj) {
			var str = [];
			for(var property in obj) {
				if (typeof obj[property] == "object") {
					obj[property] = JSON.stringify(obj[property]);
				}
				str.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
			}
			return str.join("&");
		}
	};

	return {
		post: function(url, data) {
			return $http.post(url, data.params, config);
		},

		put: function(url, data) {
			return $http.put(url, data.params, config);
		},
		
		get: function(url, data, config) {
			return $http.get(url, data, config);
		},
		
		delete: function(url, data, config) {
			return $http.delete(url, data, config);
		}
	};
});