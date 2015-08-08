class FooterDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'EA',
      templateUrl: 'app/components/directives/footer.html',
      // scope: {
      //     creationDate: '='
      // },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class FooterController {
  constructor () {
    'ngInject';

  }
}

export default FooterDirective;
