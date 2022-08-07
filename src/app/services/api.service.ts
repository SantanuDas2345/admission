import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url: string = "https://jsonplaceholder.typicode.com/"
  url: string = "http://localhost:8080/";
  token: string ="";
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token') || "";

  }

  getData(endpoint: string) {
    const headers = new HttpHeaders({
        "Authorization": this.token
    });
    return this.http.get(this.url  + endpoint, {headers: headers});
  }
  postData(endpoint: string, params: any) {
    const headers = new HttpHeaders({
      "Authorization": this.token
    });
    return this.http.post(this.url+endpoint, params, {headers: headers});
  }

}
