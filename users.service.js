angular.module('app').factory('Users', function($q, $http) {
    var called = false;
    return {
        getUsers: function() {
            if (!called) {
                called = true;
                // We don't really have a server here, so we're faking it by
                // making the first "request" trigger/ a 401 response.
                return $http.get('http://httpbin.org/status/401');
            }

            return $q.when([
                {id: 1, name: 'Alice'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Carl'},
                {id: 4, name: 'Dana'},
                {id: 5, name: 'Eve'},
                {id: 6, name: 'Frank'},
                {id: 7, name: 'Greg'},
                {id: 8, name: 'Hanna'},
                {id: 9, name: 'Ian'},
                {id: 10, name: 'Joey'},
                {id: 11, name: 'Khaleesi'},
                {id: 12, name: 'Louis'}
            ]);
        }
    };
});
