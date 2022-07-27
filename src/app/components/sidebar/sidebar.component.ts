import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar: any = [
    {
      name: "Student List",
      url: 'student-list'
    },
    {
      name: 'Settings',
      url: 'settings'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
