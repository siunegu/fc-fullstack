function runBlock($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}

export default runBlock;
