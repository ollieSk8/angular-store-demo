var app=angular.module('store-product',[]);
/*
	productTitle
*/
app.directive('productTitle',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-title.html'
	};
});

/*
	product-panels
*/

app.directive('productPanels',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-panels.html',
		controller:function(){
			this.tab=1;
			this.selectTab=function(setTab){//根据当前点击的选项，获取索引
				this.tab=setTab;
			};
			this.isSelected=function(checkTab){//页面ng-class 返回一个布尔值
				return this.tab===checkTab;//如果 当前索引等于 原来的顺序 则为真 ，为真就加上active
			}
		},
		controllerAs:'panel'
	};
});

/*
	product-gallery
*/

app.directive('productGallery',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-gallery.html',
		controller:function(){
			this.current = 0;
		    this.setCurrent = function(index){
		      this.current = index;
		    };
		},
		controllerAs:'gallery'
	};
});

/*
	product-description
*/

app.directive('productDescription',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-description.html'
	};
});

/*
	product-spec
*/

app.directive('productSpec',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-spec.html'
	}
});

/*
	product-reviews
*/

app.directive('productReviews',function(){
	return {
		restrict:'E',
		templateUrl:'tmpl/product-reviews.html'
	}
});