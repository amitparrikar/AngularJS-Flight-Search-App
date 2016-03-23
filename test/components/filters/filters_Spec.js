/**
 * Created by parrikaa on 10/03/16.
 */
describe('Custom Filters', function(){
    var $rootScope, $scope, $filter,  placeFilter, dateFilter, lessThan, maxVal,
        tempData = [
            {
                "id": 0,
                "flightName": "Kingfisher Goa-Delhi",
                "from": "Goa",
                "to": "Delhi",
                "departureTime": "02:30pm",
                "arrivalTime": "03:30pm",
                "date": "03/20/2016",
                "flightRate": "1500 INR"
            },
            {
                "id": 1,
                "flightName": "Kingfisher Delhi-Goa",
                "from": "Delhi",
                "to": "Goa",
                "departureTime": "02:30pm",
                "arrivalTime": "03:30pm",
                "date": "03/21/2016",
                "flightRate": "1500 INR"
            },
            {
                "id": 2,
                "flightName": "Spice Jet Delhi-Thailand",
                "from": "Delhi",
                "to": "Thailand",
                "departureTime": "02:05pm",
                "arrivalTime": "03:50am",
                "date": "17/03/2016",
                "flightRate": "12696 INR"
            },
            {
                "id": 3,
                "flightName": "Malindo Delhi-Dubai",
                "from": "Delhi",
                "to": "Dubai",
                "departureTime": "12:55pm",
                "arrivalTime": "08:15am",
                "date": "17/03/2016",
                "flightRate": "24135 INR"
            }];

    beforeEach(function(){
        module('filtersModule');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $filter = $injector.get('$filter');

            placeFilter = $filter('placeFilter');
            dateFilter = $filter('dateFilter');
            lessThan = $filter('lessThan');
            maxVal = $filter('maxVal');
        });
    });

    describe('Initialization', function(){

        it('Should initialize place filter', function(){
            expect(placeFilter).toBeDefined();
        });
        it('Should initialize date filter', function(){
            expect(dateFilter).toBeDefined();
        });
        it('Should initialize lessThan filter', function(){
            expect(lessThan).toBeDefined();
        });
        it('Should initialize maxVal filter', function(){
            expect(maxVal).toBeDefined();
        });
    });

    describe('Place Filter Verification', function(){
        it('Should filter by place from', function(){
            expect(placeFilter(tempData, {from: 'Delhi'}).length).toEqual(3);
        });
        it('Should filter by place to', function(){
            expect(placeFilter(tempData, {to: 'Delhi'}).length).toEqual(1);
        });
    });

    describe('Date Filter Verification', function(){
        it('Should filter by Date', function(){
            expect(dateFilter(tempData, '17/03/2016', 'date').length).toEqual(2);
        });
    });

    describe('lessThan Filter Verification', function(){
        it('Should return data for flight rate less than or equal to INR 2000', function(){
            expect(lessThan(tempData, 2000, 'flightRate').length).toEqual(2);
        });
    });

    describe('maxVal Filter Verification', function(){
        it('Should return the maximum flight rate from the given data', function(){
            expect(maxVal(tempData, 'flightRate')).toEqual(24135);
        });
    });
});