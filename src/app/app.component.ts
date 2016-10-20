import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterOutletMap } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
      <h1>My App!</h1>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/page']">Page</a>
      <a [routerLink]="['/admin']">Admin</a>
      <div class=outlet>
        <router-outlet></router-outlet>
      </div>
      <router-outlet name="app"></router-outlet>
      <router-outlet name="xyz"></router-outlet>
  `,
  styles: ['.outlet{border:1px solid #000;padding:20px;}']
})
export class AppComponent implements OnInit {
  constructor(
    private parentOutletMap: RouterOutletMap
  ) { }
  ngOnInit() {
    console.info("App:", this.parentOutletMap);
  }
}
