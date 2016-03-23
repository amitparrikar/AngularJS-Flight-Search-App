/**
 * Created by parrikaa on 10/03/16.
 */
describe('Slider control', function(){
    var $rootScope, $scope, $controller, controller, el, $el,
        $body = $('body'),
        sampleHtml = '<slider slider-value="sliderValue" slider-max-value="1000" slider-min-value="0" slider-callback="sliderCallback(value)"></slider>';
    $.prototype.slider = function(configObj){

    }

    beforeEach(function(){
        module('sliderModule');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $compile = $injector.get('$compile');

            $scope = $rootScope.$new();
            //controller = $controller('ctrlName', {$scope: $scope});

            $scope.sliderCallback = function(value){
                return 'slider called';
            };
            $scope.sliderValue = 100;

            el = $compile(angular.element(sampleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
        $el = $('#slider');
    });

    describe('Initialization', function(){
        it('Should initialize the markup in DOM', function(){
            expect($el.length === 1).toBeTruthy();
        });

        it('Should be able to detect the change in slider', function(){
            //TODO:getting error due to something please check later
            var value = el.click();
            $rootScope.$digest();
        })
    });

});