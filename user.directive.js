angular.module('app').directive('user', function($stateParams, $state, Users) {
    return {
        template: '<h1>User: {{ vm.user.name }}</h1>' +
                  '<div>Imagine more info here...</div>' +
                  '<button ng-click="vm.backHome()">Back to home</button>',
        scope: {},
        bindToController: true,
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            Users.getUsers().then(function(users) {
                angular.forEach(users, function(user) {
                    if (user.id.toString() === $stateParams.id) {
                        vm.user = user;
                    }
                });
            });

            vm.backHome = function() {
              $state.go('home');
            };
        }
    };
});
