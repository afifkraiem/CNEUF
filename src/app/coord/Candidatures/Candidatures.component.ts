import { TokenStorageService } from './../../auth/token-storage.service';
import { Observable } from 'rxjs';
import { CandidatureService } from './../../services/candidature.service';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { tokenKey } from '@angular/core/src/view';
@Component({
  selector: 'app-Candidatures',
  templateUrl: './Candidatures.component.html',
  styleUrls: ['./Candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  currentUser: any;
  candidatures: any;
  id: any;
  constructor(private userservice: UserService, private candservice: CandidatureService, private tokenstorage: TokenStorageService) {

  }
  ngOnInit() {
    this.candidatures = [];
    return this.candservice.getCandByUserId().subscribe((data: {}) => {
      console.log(data);
      this.candidatures = data;
    });
}

}


