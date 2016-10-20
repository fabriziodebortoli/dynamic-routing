import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { AuxComponent } from './aus.component';

// export const routing: ModuleWithProviders = RouterModule.forChild([
//   { path: '', component: PageComponent },
//   {
//     path: 'wrap', component: PageComponent, children: [
//       { path: 'test', component: AuxComponent, outlet: 'test' }
//     ]
//   },
// ]);
export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'altro',
        pathMatch: 'full'
      },
      {
        path: 'altro',
        component: AuxComponent,
      }
    ]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [PageComponent],
  exports: [PageComponent]
})
export default class PageModule {

}
