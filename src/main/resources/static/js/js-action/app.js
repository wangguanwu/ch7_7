/**
 * Created by Administrator on 2018/7/13 0013.
 */
var actionApp=angular.module('actionApp',['ngRoute']);
actionApp.config(['$routeProvider' ,function($routeProvider){
    $routeProvider.when('/oper',{
        controller: 'ViewController',
        templateUrl:'views/view1.html',
    }).when('/directive',{
        controller:'View2Controller',
        templateUrl:'views/view2.html',
    })
}]);
