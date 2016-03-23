/**
 * Created by parrikaa on 10/03/16.
 */
describe('Tabs', function(){
    var $rootScope, $scope, el, $el,
        $body = $('body'),
        sampleHtml = '<tab><tab>';

    beforeEach(function(){
        module('tabsModule', 'components/tabs/tabsDirective.html', 'components/tabs/tabItemDirective.html');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            $scope = $rootScope.$new();

            el = $compile(angular.element(sampleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
        $el = $('tab');
    });

    describe('Initialization', function(){
        it('Should initialize the markup in the DOM', function(){
            expect(el.length).toEqual(1);
        });
    });
});