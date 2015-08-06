function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('home.features', {
      url: '/features',
      templateUrl: 'app/carousel/carousel.html'
    })

    .state('home.techspecs', {
      url: '/techspecs',
      templateUrl: 'app/techspec/techspecs.html',
        controller: 'TechspecController',
        controllerAs: 'techspec'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })

    .state('preorder', {
      url: '/preorder',
      templateUrl: 'app/preorder/preorder.html',
      controller: 'PreorderController',
      controllerAs: 'preorder'
    })

    .state('features', {
      url: '/features',
      templateUrl: 'app/feature/features.html',
      controller: 'FeatureController',
      controllerAs: 'feature'
    });


  $urlRouterProvider.otherwise('/home');
}

export default routerConfig;
