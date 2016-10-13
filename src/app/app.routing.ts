
import { PageComponent } from './pages/page.component';
import { AuxComponent } from './pages/aus.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: 'page',
        loadChildren: () => new Promise(function (resolve) {
            (require as any).ensure([], function (require: any) {
                resolve(require('./pages/page.module').default);
            });
        })
    },

    {
        path: 'test',
        component: AuxComponent,
        outlet: 'test'
    },

    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
