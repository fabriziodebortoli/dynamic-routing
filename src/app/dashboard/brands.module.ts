import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrandsComponent } from './brands.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrandsComponent
      }
    ])
  ],
  declarations: [BrandsComponent],
  bootstrap: [BrandsComponent]
})
export default class BrandsModule { }