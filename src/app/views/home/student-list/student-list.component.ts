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
  addStudent() {
    const data = {
      name: "Santanu",
      email: "santa@gmail.com",
      phone:"7898",
      dob: "2022-01-17",
      indentication_mark:"Someting ",
      blood_group:"a+"
    }
    this.api.postData('create-student', data).subscribe((next) => {
      console.log(next);
    })
  }
  declineStudent(student: any) {
    student.action = -1
  }
  acceptStudent(student: any) {
    student.action = 1
  }

}
