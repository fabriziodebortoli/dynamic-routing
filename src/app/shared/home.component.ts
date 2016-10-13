import { Router, RouterOutlet, RouterOutletMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  template: `
      <h3>Home Component</h3>
      <button (click)="createRouterOutlet('test')">add</button>
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
    console.info("HomeComponent OutletMap onInit:", this.parentOutletMap);
  }

  createRouterOutlet(name: string) {
    new RouterOutlet(this.parentOutletMap, this.ros, this.resolver, name);
    console.info("HomeComponent OutletMap with new RouterOutlet:", this.parentOutletMap);
  }

  go() {
    this.router.navigate([{ outlets: { test: 'test' } }], { relativeTo: this.route });
  }
}
