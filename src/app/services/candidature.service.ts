import { TokenStorageService } from '../auth/token-storage.service';
import { Candidature } from './../candidature';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }
  apiUrl = 'http://localhost:8080/api';

  getCandidatures() {
    return this.http.get<any>(this.apiUrl + '/cands');
  }

  getCandByUserId() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.tokenservice.getToken() });
    const options = ({ headers: headers });
    return this.http.get<any> (this.apiUrl + '/cands1', options);
  }
getCandById(id: number) {
  return this.http.get<any[]> (this.apiUrl + '/cand/' + id);

}
  saveCand(candidature: Candidature) {
   return this.http.post(this.apiUrl + '/savecandi', candidature);
  }
}
