/**
 * Created by parrikaa on 10/03/16.
 */
describe('flightSearchService', function(){
    var $rootScope, $scope, flightSearchService;

    beforeEach(function(){
        module('flightSearchModule');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            flightSearchService = $injector.get('flightSearchService');

            spyOn(flightSearchService, 'getData').and.returnValue({});

        });
    });

    describe('Initialization', function(){
        it('Should define define all the available function', function(){
            expect(flightSearchService.getGridConfig).toBeDefined();
            expect(flightSearchService.filterFlightSearchData).toBeDefined();
            expect(flightSearchService.getData).toBeDefined();
        });
    });

    describe('getGridConfig shuould return correct data', function(){
        it('Should return initial config', function(){
            expect(flightSearchService.getGridConfig().columnNames.length).toEqual(4);
            expect(flightSearchService.getGridConfig().fieldNames.length).toEqual(4);
        });
    });
});