/**
 * Created by parrikaa on 10/03/16.
 */
describe('SearchForm Directive', function(){
    var $rootScope, $scope, el1, el2, $compile,
        $body = $('body'),
        sampleHtml1 = '<search-form one-way="true"></search-form>',
        sampleHtml2 = '<search-form one-way="false"></search-form>';


    beforeEach(function(){
        module('searchFormModule', 'components/searchForm/searchForm.html');

        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');

            $scope = $rootScope.$new();

            el1 = $compile(angular.element(sampleHtml1))($scope);
            el2 = $compile(angular.element(sampleHtml2))($scope);

        });

        $body.append(el1);
        $rootScope.$digest();

        $body.append(el2);
        $rootScope.$digest();

    });

    describe('Initialization', function(){
        it('Should be initialized in the DOM', function(){
            expect($('search-form').length).toEqual(2);
        });
    });
    describe('One way journey search form', function(){

        it('Should have Return date field hidden', function(){
            expect($(el1).find('.visibility-hidden').length).toEqual(2);
        });
    });
    describe('Return journey search form', function(){
        it('Should have Return date field hidden', function(){
            expect($(el2).find('.visibility-hidden').length).toEqual(1);
        });
    });
});