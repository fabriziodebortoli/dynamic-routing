import { Router, RouterOutlet, RouterOutletMap } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
    template: `Page 
        <hr>
        <button (click)="createRouterOutlet('test')">add</button>
        <button (click)="go()">go</button>
        <div #rox></div>`
})
export class PageComponent implements OnInit {

    @ViewChild('rox', { read: ViewContainerRef }) rox: ViewContainerRef;

    constructor(private router: Router,
        private parentOutletMap: RouterOutletMap,
        private resolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        console.info(this.parentOutletMap);
    }

    createRouterOutlet(name: string) {
        let ro: RouterOutlet = new RouterOutlet(this.parentOutletMap, this.rox, this.resolver, name);
        console.info(this.parentOutletMap);
    }

    go() {
        this.router.navigateByUrl('/page/wrap/(test:test)');
    }
}