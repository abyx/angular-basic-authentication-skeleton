angular.module('app').directive('login', function($location, $state, $stateParams) {
    return {
        template: '<form ng-submit="vm.submit()">' +
                    '<h1>Login</h1>' +
                    '<div><input type="email" placeholder=email></div>' +
                    '<div><input type=password placeholder="Password"></div>' +
                    '<div><input type=submit>' +
                  '</form>',
        scope: {},
        bindToController: true,
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.submit = function() {
                // In a real app we'd fire a $http request to login and only then redirect
                if ($stateParams.url) {
                    $location.url($stateParams.url);
                } else {
                    $state.go('home');
                }
            };
        }
    };
});
