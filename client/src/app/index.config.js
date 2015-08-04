function config ($logProvider, $httpProvider) {
	'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // CORS
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  

}

export default config;
