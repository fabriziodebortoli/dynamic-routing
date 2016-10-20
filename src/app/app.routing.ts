
import { PageComponent } from './pages/page.component';
import { AuxComponent } from './pages/aus.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home.component';

export const appRoutes: Routes = [
    // { path: '', component: HomeComponent },

    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    },

    {
        path: 'wrap',
        component: HomeComponent,
        children: [
            {
                path: 'xyz',
                component: AuxComponent,
                outlet: 'xyz'
            }
        ]
    },

    {
        path: 'page',
        loadChildren: () => new Promise(function (resolve) {
            (require as any).ensure([], function (require: any) {
                resolve(require('./pages/page.module').default);
            });
        })
    },

    {
        path: 'pagexyz',
        loadChildren: () => new Promise(function (resolve) {
            (require as any).ensure([], function (require: any) {
                resolve(require('./pages/page.module').default);
            });
        }),
        outlet: 'xyz'
    },

    {
        path: 'admin',
        loadChildren: () => new Promise(function (resolve) {
            (require as any).ensure([], function (require: any) {
                resolve(require('./dashboard/dashboard.module').default);
            });
        })
    },

    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
