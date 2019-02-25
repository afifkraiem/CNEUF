import { CandidatureService } from '../../services/candidature.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aff-cand',
  templateUrl: './aff-cand.component.html',
  styleUrls: ['./aff-cand.component.css']
})
export class AffCandComponent implements OnInit {

  constructor(private candservice: CandidatureService) { }
candidatures: any ;
  ngOnInit() {
this.getAllCands();
  }
getAllCands() {
  this.candidatures = [];
  return this.candservice.getCandidatures().subscribe((data: {}) => {
    console.log(data);
    this.candidatures = data;
  });  }

}

