import { CandidatureService } from './../../services/candidature.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cand-details',
  templateUrl: './cand-details.component.html',
  styleUrls: ['./cand-details.component.css']
})
export class CandDetailsComponent implements OnInit {
 id;
cand: any;
  constructor(private route: ActivatedRoute, private candservice: CandidatureService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.showCand();
  }
showCand() {
  this.candservice.getCandById(this.id).subscribe((data => {
    console.log(data);
    this.cand = data;
  }));  }

print(){
  window.print(); 
}
}

