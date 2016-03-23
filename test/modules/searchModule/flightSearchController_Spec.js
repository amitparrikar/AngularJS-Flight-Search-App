/**
 * Created by parrikaa on 10/03/16.
 */
describe('Flight search controller', function(){
    var $rootScope, $scope, $controller, controller, flightSearchService;

    beforeEach(function(){
        module('mainApp');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');

            $scope = $rootScope.$new();
            controller = $controller('flightSearchController', {$scope: $scope});
            flightSearchService = $injector.get('flightSearchService');

            spyOn(flightSearchService, 'getData').and.returnValue({
                then: function(callback){
                    var dataObj = [{}, {}];

                    callback(dataObj);
                }
            });
        });
    });

    describe('Initialization', function(){
        it('Should register SLIDER_SEARCH_CALLBACK properly', function(){
            $rootScope.$broadcast('SLIDER_SEARCH_CALLBACK', {scope: $scope, callbackName: 'sliderCallback'});

            expect($scope.sliderCallback).toBeDefined();
        });

        it('Should register SEARCH_CALLBACK properly', function(){
            $rootScope.$broadcast('SEARCH_CALLBACK', {scope: $scope, callbackName: 'searchCallback'});

            expect($scope.searchCallback).toBeDefined();
        });
    });

    describe('Registered callback are called successfully', function(){
        it('Should be able to call searchCallback', function(){
            $scope.formData = {
                endPlace: "Goa",
                sliderMaxValue: 2920,
                sliderValue: 3750,
                startDate: "03/20/2016",
                startPlace: "Delhi",
            }

            $rootScope.$broadcast('SEARCH_CALLBACK', {scope: $scope, callbackName: 'searchCallback'});

            $scope.searchCallback();

            expect($scope.showSlider).toBeTruthy();
            expect($scope.gridConfig.gridData.length).toEqual(0);


        });
    });
});