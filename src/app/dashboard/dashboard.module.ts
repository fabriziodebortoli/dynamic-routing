import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
      ,
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'brands',
            loadChildren: () => new Promise(function (resolve) {
              (require as any).ensure([], function (require: any) {
                resolve(require('../dashboard/brands.module').default);
              });
            }),
            outlet: 'admin'
          }
        ]
      }
    ])
  ],
  declarations: [DashboardComponent],
  bootstrap: [DashboardComponent]
})
export default class DashboardModule { }