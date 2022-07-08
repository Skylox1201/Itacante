angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/fiches');
        },

        // call to get nerds of all creatures
        get : function(type_creature) {
            return $http.get('/fiches' + type_creature);
        },

        // these will work when more API routes are defined on the Node side of things

        // call to POST and create a new fiche
        create : function(ficheData) {
            return $http.post('/fiches', ficheData);
        },

        // call to DELETE a fiche
        delete : function(id) {
            return $http.delete('/fiches' + id);
        }
    }

}]);