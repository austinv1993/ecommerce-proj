angular.module('ecommerceApp')
.service('mainService', function($http) {
	this.getProducts = function() {
		return $http.get('/api/product')
		.then(function(response) {
			console.log(response)
			return response.data
		})
	}
})