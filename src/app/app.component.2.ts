import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>My App!</h1>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/page']">Page</a>
      <div class=outlet>
        <router-outlet></router-outlet>
      </div>
  `,
  styles: ['.outlet{border:1px solid #000;padding:20px;}']
})
export class AppComponent {
}
