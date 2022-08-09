import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student :FormGroup;
  @Output() studentEmit = new EventEmitter();
  constructor(public api: ApiService, public fb: FormBuilder) {
    this.student = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      identification_mark: ['', Validators.required],
      blood_group: ['', [Validators.required, Validators.pattern("^(o|a|b|ab)(\\+|-)ve$")]]
    })
  }

  ngOnInit(): void {
  }
  addStudent(data: any) {

    this.api.postData('create-student', data).subscribe((next) => {
      console.log(next);
      if(next) {
       this.studentEmit.emit(next);
      }
    })
  }
}
