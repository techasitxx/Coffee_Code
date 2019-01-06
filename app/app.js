var app = angular.module('app',['ui.router'])
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/Home/index.html'
    })
    .state('next', {
        url: '/',
        templateUrl: 'app/NextPage/index.html'
    })
    .state('Menu', {
        url: '/',
        templateUrl: 'app/Menu/index.html'
    })
    .state('page1', {
        url: '/',
        templateUrl: 'app/Page/1.html'
    })
    .state('page2', {
        url: '/',
        templateUrl: 'app/Page/2.html'
    })
    .state('page3', {
        url: '/',
        templateUrl: 'app/Page/3.html'
    })
    .state('page4', {
        url: '/',
        templateUrl: 'app/Page/4.html'
    })
    .state('page5', {
        url: '/',
        templateUrl: 'app/Page/5.html'
    })
    .state('page6', {
        url: '/',
        templateUrl: 'app/Page/6.html'
    })
})