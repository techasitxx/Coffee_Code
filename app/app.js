var app = angular.module('app',['ui.router'])
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/Home/index.html'
    })
    .state('next', {
        url: '/next_page',
        templateUrl: 'app/NextPage/index.html'
    })
    .state('Menu', {
        url: '/menu_page',
        templateUrl: 'app/Menu/index.html'
    })
    .state('page1', {
        url: '/blag_page_1',
        templateUrl: 'app/Page/1.html'
    })
    .state('page2', {
        url: '/blag_page_2',
        templateUrl: 'app/Page/2.html'
    })
    .state('page3', {
        url: '/blag_page_3',
        templateUrl: 'app/Page/3.html'
    })
    .state('page4', {
        url: '/blag_page_4',
        templateUrl: 'app/Page/4.html'
    })
    .state('page5', {
        url: '/blag_page_5',
        templateUrl: 'app/Page/5.html'
    })
    .state('page6', {
        url: '/blag_page_6',
        templateUrl: 'app/Page/6.html'
    })
})