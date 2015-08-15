/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainController from './main/main.controller';
// import SlickDirective from '../app/components/slick/'

angular.module('client', ['ngTouch', 'ui.router', 'ngDialog', 'uiGmapgoogle-maps'])
  .constant('moment', moment)

  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('MainController', MainController)


  // .directive('acmeNavbar', () => new NavbarDirective())

  // .directive('footerDirective', () => new FooterDirective())

  .directive('gmapDirective', () => new GmapDirective())
