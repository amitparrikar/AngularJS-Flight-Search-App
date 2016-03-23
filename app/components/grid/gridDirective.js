/**
 * Created by parrikaa on 09/03/16.
 */
/**
 * CUSTOM GRID COMPONENT, IT SORTS WHEN CLICKED ON COLUMN NAMES, TAKES gridConfig AS INPUT PARAMETER AND IS A TWO WAY DATA-BIND
 */
angular.module('gridModule', []).directive('grid', [function(){
   return{
       restrict: 'E',
       scope: {
           gridConfig: '='
       },
       templateUrl: 'components/grid/grid.html',
       link: function($scope, tElem, tAttr){
           $scope.sortOn = {};

           $scope.sortOn.colName = "";

           $scope.sort = function(indx){

               var sortField = $scope.gridConfig.fieldNames[indx];
               $scope.sortOn.colName = sortField;
               $scope.sortOn.curIndx = indx;

               if(!$scope.sortOn[sortField]){
                   $scope.sortOn[sortField] = true;
               }else{
                   $scope.sortOn[sortField] = !$scope.sortOn[sortField];
               }
           }
       }
   }
}]);