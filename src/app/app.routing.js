"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var test_component_1 = require('./test.component');
var page_not_found_component_1 = require("./page-not-found.component");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'test', component: test_component_1.TestComponent },
    {
        path: 'sjs',
        loadChildren: function () { return System.import('./runtime/runtime.module').then(function (module) {
            return module.default;
        }); }
    },
    {
        path: 'dynamic',
        loadChildren: function () { return new Promise(function (resolve) {
            require.ensure([], function (require) {
                var merda = require('./runtime/dynamic.module');
                resolve(merda.default);
            });
        }); }
    },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes, { enableTracing: true });
