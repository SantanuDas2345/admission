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
      url: ''
    },
    {
      name: 'Class Distribution',
      url: ''
    },
    {
      name: 'Admission Fee',
      url: ''
    },
    {
      name: 'Something',
      url: ''
    },
    {
      name: 'Final',
      url: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
