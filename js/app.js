(function(){
	var app=angular.module('store',['store-product']);

	/*
		StoreController 渲染产品列表
	*/

	app.controller('StoreController',['$http','$log',function($http,$log){
		var store=this;
		var req={method:'GET',url:'./product.json'};
		store.product=[];
		$http(req).success(
			function(data){
				store.product=data;
			}
		);
	}]);

	/*
		ReviewController 评论功能
	*/

	app.controller("ReviewController", function(){

	    this.review = {};

	    this.addReview = function(product){
	    	console.log('1')
	      product.reviews.push(this.review);
	      this.review = {};
	    };

  	});
})();