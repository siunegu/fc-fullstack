class GmapDirective {
	constructor (google) {
		'ngInject';
		console.log(google);
		let directive = {
			restrict: 'EA',
			templateUrl: 'app/components/directives/gmap.html',
			controller: GmapController,
			scope: {
			},
			controllerAs: 'gmap',
			bindToController: true
		};

		return directive;
	}
}

class GmapController {
	constructor () {
		'ngInject';

	}
}

export default GmapDirective;