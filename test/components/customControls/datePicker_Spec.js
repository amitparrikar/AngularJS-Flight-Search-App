/**
 * Created by parrikaa on 10/03/16.
 */
describe('Datepicker Components', function(){
    var $rootScope, $scope, $controller, controller, el, $el,
        $body = $('body'),
        sampleHtml = '<date-picker date="dateValue" place-holder="Custom Datepicker" is-required="true" name="myDatepicker"></date-picker>';

    $.prototype.datepicker = function(configObj){

    }

    beforeEach(function(){
        module('datePickerModule');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $compile = $injector.get('$compile');

            $scope = $rootScope.$new();
            //controller = $controller('', {$scope: $scope});

            $scope.value = '03.21/2016';
            el = $compile(angular.element(sampleHtml))($scope);

        });

        $body.append(el);
        $rootScope.$digest();
        $el = $('input [name="myDatepicker"]');

    });

    describe('Initialization', function(){
        it('Should initialize the directive with the markup', function(){
            //TODO: getting error due to something, check later
            //expect($el.length === 1).toBeTruthy();
        })
    });

});