angular.module('ngAgile', [])
	.directive('lazyLoad', ['$window', '$document', function ($window, $document) {
		return {
			restrict: 'A',
			scope: {
				callback: "&"
			},
			link: function (scope, iElement, iAttrs) {
				$($window).scroll(function(event) {
					if ($($window).scrollTop() >= ($($document).height() - $($window).height())*0.7){
						if(scope.callback) {
							scope.callback();
						}
					}
				});
			}
		};
	}]);