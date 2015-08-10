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
      templateUrl: 'app/carousel/carousel.html',
      controller: 'MainController',
      controllerAs: 'main',
      reload: true
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
      controllerAs: 'about',
      reload: true
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
    })

    .state('blog', {
      url: '/blog',
      templateUrl: 'app/blog/blog.html',
      controllersAs: 'blog'
    });


  $urlRouterProvider.otherwise('/home/features');
}

export default routerConfig;
