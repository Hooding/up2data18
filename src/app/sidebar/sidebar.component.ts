import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'map', title: 'Map', icon: 'pe-7s-ball', class: '' }
    // { path: 'demographic', title: 'Demographic',  icon: 'pe-7s-graph', class: '' },
    // { path: 'interests', title: 'Interests', icon: 'pe-7s-ball', class: ''},
    // { path: 'satisfaction', title: 'Satisfaction', icon: 'pe-7s-like', class: ''},
    // { path: 'involvement', title: 'Involvement', icon: 'pe-7s-users', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
