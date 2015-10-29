angular.module('app').directive('expireSessionButton', function($state, $http) {
    return {
        template: '<button ng-click="vm.forceSessionExpired()" ng-if="!vm.loginPage()">' +
                    'Force session to expire' +
                  '</button>',
        scope: {},
        bindToController: true,
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            vm.loginPage = function() {
              return $state.current.name === 'login';
            };

            vm.forceSessionExpired = function() {
                return $http.get('http://httpbin.org/status/401');
            };
        }
    };
});
