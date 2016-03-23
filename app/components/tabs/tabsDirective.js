/**
 * Created by parrikaa on 09/03/16.
 */
angular.module('tabsModule', []).directive('tabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function($scope) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            this.addPane = function(pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };
        }],
        templateUrl: 'components/tabs/tabsDirective.html'
    };
})
.directive('tabItem', function() {
    return {
        require: '^^tabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        templateUrl: 'components/tabs/tabItemDirective.html'
    };
});
