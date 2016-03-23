/**
 * Created by parrikaa on 09/03/16.
 */
angular.module('mainApp').controller('flightSearchController', ['$rootScope', '$scope', 'flightSearchService', '$filter', function($rootScope, $scope, flightSearchService, $filter){

    (function(){
        var originalSearchData = [];

        $rootScope.$on('SLIDER_SEARCH_CALLBACK', function(event, data){
            (function(dirScope, cbName){

                //Slider search callback is registered
                dirScope[cbName] = function(sliderValue){
                    dirScope.gridConfig.gridData = $filter('lessThan')(originalSearchData, sliderValue, 'flightRate');
                }

            })(data.scope, data.callbackName);
        });

        $rootScope.$on('SEARCH_CALLBACK', function(event, data){

            (function(dirScope, cbName){

                dirScope.gridConfig = flightSearchService.getGridConfig();
                dirScope.showSlider = false;

                //search Callback is registered
                dirScope[cbName] = function(){
                    flightSearchService.getData(dirScope.formData).then(function(data){

                        dirScope.gridConfig.gridData = flightSearchService.filterFlightSearchData(data, dirScope.formData.startPlace, dirScope.formData.endPlace, dirScope.formData.startDate, dirScope.formData.returnDate);

                        originalSearchData = angular.copy(dirScope.gridConfig.gridData);

                        if(dirScope.gridConfig.gridData.length != 0){
                            dirScope.showSlider = true;
                        }else{
                            dirScope.showSlider = true;
                        }

                        dirScope.formData.sliderMaxValue = $filter('maxVal')(dirScope.gridConfig.gridData, 'flightRate');

                    }, function(error){
                        //error handling
                    });
                };

            })(data.scope, data.callbackName);
        });
    })();
}]);