angular.module('contatooh', ['ngRoute'])
    .config(function ($routeProvider) {
        console.log("routing");
        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'

        });
        
        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        
        $routeProvider.otherwise({redirectTo: '/contatos'});
    });
    
