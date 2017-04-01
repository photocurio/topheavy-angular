import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import 'bootstrap-loader';
import 'angular-animate';
import 'angular-ui-bootstrap';
import 'angular-google-analytics';

// CONFIG
import routesConfig from './config/routes.config';
import {gaConfig, gaRun} from './config/ga.config';

// FACTORIES
import WPAPI from './services/wpapi.factory';

// COMPONENTS
import siteHeader       from './app/components/header/header';
import navbar           from './app/components/navbar/navbar';
import siteFooter       from './app/components/footer/footer';
import comments         from './app/components/comments/comments';
import collectionPosts  from './app/components/collection/collection';
import paginationLinks  from './app/components/pagination/pagination';
import postMeta         from './app/components/meta/meta';
import pageComponent    from './app/components/page/page';
import singlePost       from './app/components/single/single';
import replies          from './app/components/replies/replies';

angular.module('app', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'angular-google-analytics'
])
.config(routesConfig)
.config(gaConfig)
.run(gaRun)
.factory('WPAPI', WPAPI)
.component('siteHeader', siteHeader)
.component('navbar', navbar)
.component('siteFooter', siteFooter)
.component('home', collectionPosts)
.component('paginationLinks', paginationLinks)
.component('comments', comments)
.component('posts', collectionPosts)
.component('postMeta', postMeta)
.component('page', pageComponent)
.component('singlePost', singlePost)
.component('replies', replies);
