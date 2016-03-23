/**
 * Created by parrikaa on 09/03/16.
 */
/****
 * Starting point of the application.
 * Register all your external modules here.
 * In the future application Routing should be done here.
  * @type {angular.Module}
 */
var mainApp = angular.module('mainApp', ['tabsModule',
    'searchFormModule',
    'gridModule',
    'flightSearchModule',
    'filtersModule',
    'customControlsModule']);