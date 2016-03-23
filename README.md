THIS GIVES INTRODUCTION TO FUNCTIONAL AND TECHNICAL CAPABILITIES OF THIS APPLICATION.

Application has the following functionality:
    1) Two tabs, each for One way journey and Return journey search
    2) There is a data.json file for the data.
    3) Choose the following for searching(for other values please check data.json):
        Journey from :  Delhi
        To:             Goa
        Start date   :  03/20/2016
    4) Search button is disabled when no data is entered(Form validation)
    5) Reset button resets all the search criteria and hides the slider and grid.
    6) Clicking on Search Button will show the slider and any data which is present.
    7) Grid can be sorter by clicking on the column names.
    8) Similar functionality for Return type journey.





Technical features:
    1) Index.html is the start point.
    2) Its a single page application.
    3) Entire application is build by creating individual web component.
    4) There is no dependancy between them except passing the data to the component.
    5) Used JqueryUI datepicker and slider tool only, the rest of the application is built from scratch. Have created custom control out of that for better maintainability.
    6) Uses AngularJS framework for the developent.
    7) No CSS framework is used except for Datepicker and Slider component.
    8) Contains unit tests for each component & module present.




How to Install the Application:
    grunt install   //To install node and bower components
    grunt karma     //To run the unit test
    grunt           //To start the local server   http://localhost:8080/app/index.html
    
