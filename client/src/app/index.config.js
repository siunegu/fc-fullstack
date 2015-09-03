function config ($logProvider, $httpProvider, $locationProvider, UIRouterMetatagsProvider) {
	'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

	// Disable Hash tags from URL
	$locationProvider.html5Mode(true);

	UIRouterMetatagsProvider.setTitleSuffix(' - Forcite Helmet Systems');
UIRouterMetatagsProvider.setDefaultTitle('Forcite Helmet Systems');

  // CORS
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];


}

export default config;
