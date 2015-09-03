function routerConfig($stateProvider, $urlRouterProvider) {
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
    reload: true,
    metaTags: {
      title: 'Smart Helmets For Action Sports',
      description: 'Forcite has created the most powerful smart helmet for action sports. Communicate, track, record and share every moment, while staying protected.'
    }

  })

  .state('home.techspecs', {
    url: '/techspecs',
    templateUrl: 'app/techspec/techspecs.html',
    controller: 'TechspecController',
    controllerAs: 'techspec',
    metaTags: {
      title: 'Ski Helmets',
      description: 'View the tech specs of Forcite Ski Helmets. These smart helmets have a 4k camera, gps, comm system, audio and long lasting battery life.'
    }
  })

  .state('home.about', {
    url: '/about',
    templateUrl: 'app/about/about.html',
    controller: 'AboutController',
    controllerAs: 'about',
    reload: true,
    metaTags: {
      title: 'Action Sport Helmets',
      description: 'Forcite’s action sport helmets started in 2013 as a research project at the University of New South Wales in Sydney, Australia.'
    }
  })

  .state('home.contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'contact',
    metaTags: {
      title: 'Contact',
      description: 'Contact Forcite Helmet Systems. Ask your question or leave a comment about the most powerful smart helmet for action sports.'
    }
  })

  .state('home.preorder', {
    url: '/preorder',
    templateUrl: 'app/preorder/preorder.html',
    controller: 'PreorderController',
    controllerAs: 'preorder',
    metaTags: {
      title: 'Pre‐Order',
      description: 'Pre‐order Forcite’s smart helmet for action sports now. Register your interest and be the first to receive exclusive insides. Thumbnail image for our website needs to be changed into the full black and red logo.'
    }
  })

  // .state('features', {
  //   url: '/features',
  //   templateUrl: 'app/feature/features.html',
  //   controller: 'FeatureController',
  //   controllerAs: 'feature'
  // })

  .state('blog', {
    url: '/blog',
    // templateUrl: 'app/blog/blog.html',
    templateUrl: 'app/components/under_construction.html',
    controllersAs: 'blog',
    metaTags: {
      title: 'Blog',
      description: 'Follow Forcite’s blog stories about the most powerful smart helmet for action sports and snow sports.'
    }
  });


  $urlRouterProvider.otherwise('/home/features');
}

export default routerConfig;
