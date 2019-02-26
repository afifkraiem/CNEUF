import { Observable } from 'rxjs';
import { CandidatureService } from './../../services/candidature.service';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-Candidatures',
  templateUrl: './Candidatures.component.html',
  styleUrls: ['./Candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  currentUser: any;
  cands: Observable<any[]>;
  constructor(private userservice: UserService, private candservice: CandidatureService) {

  }
  ngOnInit() {
this.userservice.getUserid().subscribe(res => {
  this.currentUser = res;
  console.log(res);
}

  );
  }
showCands() {
  this.cands = this.candservice.getCandByUserId(1123);
  return this.cands;

}

}
