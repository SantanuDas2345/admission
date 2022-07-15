import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData('posts').subscribe((data: any) => {
        if(data) {
          this.data = data;
        }
    });
  }

}
