import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url: string = "https://jsonplaceholder.typicode.com/"
  url: string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getData(endpoint: string) {
    return this.http.get(this.url  + endpoint);
  }
  postData(endpoint: string, params: any) {
    return this.http.post(this.url+endpoint, params);
  }

}
