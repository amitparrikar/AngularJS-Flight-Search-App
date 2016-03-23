<h1>AngularJS application with modular approach</h1>

<h3>Introduction</h3>
<p>This application is about how to use a modular approach in Angularjs application. It is a very small application which has a Flight Search module which can be used to search flights. The idea behind this effort is to make realize a developer about the importance of modularity.</p>

<h3>How to install</h3>
<h5>Execute the following commands in sequence</h5>
<ol>
    <li><code>npm install</code></li>
    <li><code>bower install</code></li>
    <li><code>grunt karma</code>    To run unit test</li>
    <li><code>grunt</code>          To start the local server http://localhost:8080/app/index.html</li>
</ol>

<h3>Technical features</h3>
<ul>
    <li>Index.html is the start point.</li>
    <li>Its a single page application.</li>
    <li>Entire application is build by creating individual web component.</li>
    <li>There is no dependancy between them except passing the data to the component.</li>
    <li>Used JqueryUI datepicker and slider tool only, the rest of the application is built from scratch. Have created custom control out of that for better maintainability.</li>
    <li>Uses AngularJS framework for the developent.</li>
    <li>No CSS framework is used except for Datepicker and Slider component.</li>
    <li>Contains unit tests for each component & module present.</li>
</ul>
