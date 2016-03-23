/**
 * Created by parrikaa on 10/03/16.
 */
/**
 * CUSTOM FILTERS MODULES RETISTERS ALL THE FILTERING MECHANISIM
 */
angular.module('filtersModule', []).filter('placeFilter', ['$filter', function($filter){
    return function(input, searchObj){
        return $filter('filter')(input, searchObj);
    }
}])
.filter('dateFilter', ['$filter', function($filter){
    return function(input, val, key){

        var tempArr = []
        if(Object.prototype.toString.call(input) === '[object Array]' ){
            input.forEach(function(item){
                if(item[key] === val)
                    tempArr.push(item);
            });
        }
        return tempArr;
    }
}])
.filter('lessThan', ['$filter', function($filter){

    return function(input, val, key){
        var tempArr = [];
        if(Object.prototype.toString.call(input) === '[object Array]') {
            input.forEach(function(item){
                if(item[key].split(' ')[0]*1 <= val*1)
                    tempArr.push(item);
            });
        }
        return tempArr;
    }
}])
.filter('maxVal', ['$filter', function($filter){

    return function(input, key){

        var maxVal = 0;
        if(Object.prototype.toString.call(input) === '[object Array]') {
            input.forEach(function(item){
                if(item[key].split(' ')[0]*1 > maxVal)
                    maxVal = item[key].split(' ')[0]*1;
            });
        }
        return maxVal;
    }
}]);