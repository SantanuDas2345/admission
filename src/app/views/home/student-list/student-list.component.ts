import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  constructor(public api: ApiService) { }
  studentList: any = [];
  ngOnInit(): void {
    this.api.getData('get-students').subscribe((next: any) => {
      if(next) {  
        this.studentList = next.students;
      }
    })
  }
  
  declineStudent(student: any) {
    student.action = -1
  }
  acceptStudent(student: any) {
    student.action = 1
  }
  studentEmitted(data: any) {
    this.studentList.push(data);
  }

}
