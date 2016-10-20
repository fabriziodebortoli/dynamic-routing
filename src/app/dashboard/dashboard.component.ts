import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
      <h2>DashboardComponent</h2>
      <router-outlet></router-outlet>
      <router-outlet name="admin"></router-outlet>
      <button (click)="go()">GO</button>
  `
})
export class DashboardComponent {
  constructor(private router: Router) { }

  go() {
    this.router.navigate(['admin/dashboard', { outlets: { admin: 'brands' } }]);
  }
}
