function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'app/header/header.html'
        },
        'footer': {
          templateUrl: 'app/footer/footer.html'
        }
      }
    })
    .state('root.home', {
      url: '/home',
      views: {
        'container@': {
          templateUrl: 'app/main/main.html'
        }
      }
    })
    .state('root.about', {
      url: '/about',
      views: {
        'container@': {
          templateUrl: 'app/about/about.html'
        }
      }
    })

    .state('root.signup', {
      url: '/signup',
      views: {
        'container@': {
          templateUrl: 'app/signup/signup.html'
        }
      }
    })

    .state('root.signin', {
      url: '/signin',
      views: {
        'container@': {
          templateUrl: 'app/signin/signin.html'
        }
      }
    })

    .state('root.howItWorks', {
      url: '/how-it-works',
      views: {
        'container@': {
          templateUrl: 'app/how-it-works/how-it-works.html'
        }
      }
    })

    .state('root.advisors', {
      url: '/advisors',
      views: {
        'container@': {
          templateUrl: 'app/advisors/advisors.html'
        }
      }
    })

    .state('root.reset', {
      url: '/reset-password',
      views: {
        'container@': {
          templateUrl: 'app/reset-password/reset-password.html'
        }
      }
    })

    .state('root.contact', {
      url: '/contact',
      views: {
        'container@': {
          templateUrl: 'app/contact/contact.html'
        }
      }
    })

}

export default routerConfig;
