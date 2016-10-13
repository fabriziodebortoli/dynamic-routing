import { Router, RouterOutlet, RouterOutletMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  template: `
      <h3>Home Component</h3>
      <router-outlet name="home"></router-outlet>
      <button (click)="createRouterOutlet('xyz')">add</button>
      <button (click)="go()">go</button>
      <div #ros></div>
  `
})
export class HomeComponent implements OnInit {
  @ViewChild('ros', { read: ViewContainerRef }) ros: ViewContainerRef;

  constructor(private router: Router,
    private parentOutletMap: RouterOutletMap,
    private resolver: ComponentFactoryResolver, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.info("Home:", this.parentOutletMap);
  }

  createRouterOutlet() {
    new RouterOutlet(this.parentOutletMap, this.ros, this.resolver, 'xyz');
    console.info("Home:", this.parentOutletMap);
  }

  go() {
    this.router.navigate([{ outlets: { xyz: 'xyz' } }], { relativeTo: this.route });
  }
}
