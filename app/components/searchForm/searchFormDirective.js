/**
 * Created by parrikaa on 09/03/16.
 */
/**
 * SEARCH FORM MODULE CAN HANDLE EITHER ONE-WAY OR RETURN-JOURNEY TYPE SEARCH.
 * oneWay = true or false DECIDE THE TYPE OF FORM SEARCH
 */
angular.module('searchFormModule', []).directive('searchForm', ['$rootScope', function($rootScope){
    return {
        restrict: 'EA',
        scope: {
            oneWay: '='
        },
        transclude: true,
        templateUrl: 'components/searchForm/searchForm.html',
        link: function($scope, iElem, iAttr, ctroller, transclude){

            $scope.formData = {};

            $scope.reset = function(){
                $scope.formData = {};
                $scope.gridConfig.gridData = undefined;
                $scope.showSlider = false;
            }

            $scope.sliderCallback = function(sliderValue){
                $scope.sliderSearch(sliderValue);
            }

            $rootScope.$broadcast('SEARCH_CALLBACK', {scope: $scope, callbackName: 'search'});
            $rootScope.$broadcast('SLIDER_SEARCH_CALLBACK', {scope: $scope, callbackName: 'sliderSearch'});

            transclude($scope, function(clone, scope) {
                iElem.append(clone);
            });
        }
    }
}]);