import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './../user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

apiUrl = 'http://localhost:8080/api';

  getUserid() {
    return this.http.get(this.apiUrl + '/id');
  }
}
