import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';

  pages = [
    {
      title: 'First Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'Second Page blank',
      url: '/menu/second'
    },
    // tambahkan untuk firebase-page
    {
      title: 'Firebase Page',
      url: '/menu/firebase-page'
    },
  ];

  // constructor() { }

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
