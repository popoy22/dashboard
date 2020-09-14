import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus() {
    this.items = [
      {
        label: 'By Enviroment',
        items: [
          {
            label: 'SIT 1',
          },
          {
            label: 'SIT 2',
          },
        ],
      },
      {
        label: 'By Country',
        items: [
          {
            label: 'Singapore',
          },
          {
            label: 'Malaysia',
          },
        ],
      },
    ];
  }
}
