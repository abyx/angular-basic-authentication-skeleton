angular.module('app').factory('AuthenticationInterceptor', function($injector, $location, $q) {
    return {
        responseError: function(rejection) {
            if (rejection.status === 401 && rejection.config.url !== '/login') {
                var $state = $injector.get('$state');
                $state.go('login', {url: $location.url()});
            }
            return $q.reject(rejection);
        }
    };
});
