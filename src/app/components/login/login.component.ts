import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  msg: string = "";
  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public api: ApiService) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  loginFunc(data: any) {
    if(data && this.login.valid) {
      this.api.postData('login', data).subscribe((next: any) => {
        if(next && !next.error) {
          localStorage.setItem('token', next.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.msg = "Error! username or password is not valid";
        }
      });
    }
  }
}
