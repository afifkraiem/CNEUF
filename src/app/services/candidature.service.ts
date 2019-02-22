import { Candidature } from './../candidature';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/cands';

  getCandidatures() {
    return this.http.get<any>(this.apiUrl + '/cands');
  }

  getCandByUserId(id: number) {

    return this.http.get (this.apiUrl + '/cands/' + id);
  }

  saveCand(candidature: Candidature) {
   return this.http.post(this.apiUrl + '/savecandi', candidature);
  }
}
