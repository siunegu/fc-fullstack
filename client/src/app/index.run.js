function runBlock($log, $rootScope, $window, $location) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeSuccess', function(e) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    if (!window.ga)
    	return;

    $window.ga('send', 'pageview', { page: $location.path() });
    console.log('changed');
  });


}

export default runBlock;

