function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
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
    });

    // .state('home.about', {
    //   url: '/about',
    //   templateUrl: 'app/about/about.html',
    //   controller: 'AboutController',
    //   controllerAs: 'about'
    // });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
