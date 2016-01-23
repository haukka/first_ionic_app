angular.module('todo.controller', []).controller('TodoCtrl', function($scope, $ionicModal) {
    $scope.lists = [];

    $ionicModal.fromTemplateUrl('new-list.html', function(modal) {
	$scope.listModal = modal;
    }, {
	scope: $scope,
	animation: 'slide-in-up'
    });

    $scope.createList = function(list) {
	if (list.name) {
	    $scope.lists.push({
		name: list.name
	    });
	    $scope.listModal.hide();
	    list.name = "";
	}
    };

    $scope.removeFromLists = function(index) {
	$scope.lists.splice(index, 1);
    };

    $scope.newList = function() {
	$scope.listModal.show();
    };

    $scope.closeNewList = function() {
	$scope.listModal.hide();
    };
});
