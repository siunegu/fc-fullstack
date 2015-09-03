function config ($logProvider, $httpProvider, $locationProvider) {
	'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

	// Disable Hash tags from URL
	$locationProvider.html5Mode(true);

  // CORS
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];


}

export default config;
