import { Router, RouterOutlet, RouterOutletMap } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
      <h1>My App!</h1>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/page']">Page</a>
      <hr>
      <router-outlet></router-outlet>
      <hr>
      <button (click)="createRouterOutlet('xyz')">add</button>
      <button (click)="go()">go</button>
      <hr>
      <div #ros></div>
  `,
})
export class AppComponent implements OnInit {

  @ViewChild('ros', { read: ViewContainerRef }) ros: ViewContainerRef;

  constructor(private router: Router,
    private parentOutletMap: RouterOutletMap,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    console.info(this.parentOutletMap);
  }

  createRouterOutlet() {
    let ro: RouterOutlet = new RouterOutlet(this.parentOutletMap, this.ros, this.resolver, 'xyz');
    console.info(this.parentOutletMap);
  }

  go() {
    this.router.navigateByUrl('/(xyz:xyz)');
  }

}