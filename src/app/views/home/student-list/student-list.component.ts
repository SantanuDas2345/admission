import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList:any = [
    {
      name: 'Santanu Das',
      dob: '10-10-2020',
      action: 0
    },
    {
      name: 'Kantanu Das',
      dob: '10-10-2000',
      action: 0
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  declineStudent(student: any) {
    student.action = -1
  }
  acceptStudent(student: any) {
    student.action = 1
  }

}
