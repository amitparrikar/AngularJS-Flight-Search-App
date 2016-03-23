/**
 * Created by parrikaa on 09/03/16.
 */
/**
 * SERVICE PROVIDER RELATED TO FLIGHT SEARCH MODULE.
 * REGISTER ALL YOUR SERVICES RELATED TO THIS MODULE HERE.
 */
angular.module('flightSearchModule', []).service('flightSearchService', ['$q', '$http', '$filter', function($q, $http, $filter){

    var ajaxCall = function(configObj){
        var defered = $q.defer();

        $http(configObj).success(function(data, status){
            defered.resolve(data);

        }).error(function(error, status){
            defered.reject(error);
        });

        return defered.promise;
    }


    this.filterFlightSearchData = function(data, startPlace, endPlace, startDate, returnDate){
        var dataCopy = angular.copy(data);

        data = $filter('placeFilter')(data, {from: startPlace});
        data = $filter('placeFilter')(data, {to: endPlace});
        data = $filter('dateFilter')(data, startDate, 'date');

        if (returnDate) {
            dataCopy = $filter('placeFilter')(dataCopy, {to: startPlace});
            dataCopy = $filter('placeFilter')(dataCopy, {from: endPlace});
            dataCopy = $filter('dateFilter')(dataCopy, returnDate, 'date');
            data = data.concat(dataCopy);
        }
        return data;
    }


    this.getGridConfig = function(){
        return {
            "columnNames": ["Flight Name", "Departure", "Arrival", "Flight Fare"],
            "fieldNames": ["flightName", "departureTime", "arrivalTime", "flightRate"]
        }
    }

    this.getData = function(searchData){

        var configObj = {
            method: 'GET',
            url: 'data.json',
            responseType: 'application/json'
        }
        return ajaxCall(configObj);

    }
}]);