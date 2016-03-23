/**
 * Created by parrikaa on 10/03/16.
 */
/**
 * CUSTOM SLIDER CONTROL, IT IS BASED ON JQUERYUI SLIDER COMPONENT
 */
angular.module('sliderModule', []).directive('slider', ['$timeout', function($timeout){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            value: '@',
            sliderValue: '=',
            sliderMaxValue: '=',
            sliderMinValue: '=',
            sliderCallback: '&'
        },
        template: '<div id="slider"></div>',
        link: function($scope, tElem, tAttr, controller, transclude){

            $(tElem).slider({
                animate: "medium",
                value: $scope.value,
                max: $scope.sliderMaxValue,
                min: $scope.sliderMinValue,
                stop: function( event, ui ) {
                    $scope.$apply(function(){

                        $scope.sliderValue = ui.value;
                        $scope.sliderCallback({ sliderValue: ui.value });

                    });
                }
            });
        }
    }
}]);