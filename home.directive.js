angular.module('app').directive('home', function($stateParams, $state, Users) {
    return {
        template: '<h1>Users: <button ng-click="vm.reverse()">reverse</button></h1><div ng-repeat="user in vm.users | orderBy:\'name\':vm.desc"><a ui-sref="user({id: user.id})">{{ user.name }}</a></div>',
        bindToController: true,
        scope: {},
        controller: function() {
            var vm = this;

            vm.desc = $stateParams.desc === 'true';

            vm.reverse = function() {
                vm.desc = !vm.desc;
                $state.go($state.current, {desc: vm.desc});
            };

            Users.getUsers().then(function(users) {
                vm.users = users;
            });
        },
        controllerAs: 'vm'
    };
});
