/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainController from './main/main.controller';
import AboutController from './about/about.controller';
import PreorderController from './preorder/preorder.controller';
import ContactController from './contact/contact.controller';

import NavbarDirective from '../app/components/navbar/navbar.directive';


angular.module('client', ['ngTouch', 'ui.router'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)


  .controller('MainController', MainController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('PreorderController', PreorderController)

  .directive('acmeNavbar', () => new NavbarDirective())
