import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://localhost:5000/";
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.apiUrl+url).pipe(map(res => {
      return res;
    }));
  }

  post(url: string, payload: any) {
    return this.http.post(this.apiUrl+url, payload).pipe(map(res => {
      return res;
    }));
  }

  put(url: string, payload: any) {
    return this.http.put(this.apiUrl+url, payload).pipe(map(res => {
      return res;
    }))
  }
}
