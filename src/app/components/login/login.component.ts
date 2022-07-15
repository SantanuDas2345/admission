import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
    this.login = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }
  loginFunc() {
    this.http.get('./assets/users.json').subscribe((data: any) => {
      if(data) {
        let chek = data.filter((item: any) => item.password === this.login.value.password && item.username === this.login.value.username);
        if(chek.length == 1) {
         this.router.navigate(['/dashboard']);
        } else {
          console.log("Error");
        }
      }
    });
  }
}
