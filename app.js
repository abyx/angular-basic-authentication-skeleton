angular.module('app', ['ui.router']);
  
angular.module('app').config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('home', {
        url: '/?desc',
        template: '<home></home>'
    }).state('user', {
        url: '/users/:id',
        template: '<user></user>'
    }).state('login', {
        url: '/login?url',
        template: '<login></login>'
    });

    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthenticationInterceptor');
});
