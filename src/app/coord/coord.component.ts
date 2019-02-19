import { TokenStorageService } from './../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coord',
  templateUrl: './coord.component.html',
  styleUrls: ['./coord.component.css']
})
export class CoordComponent implements OnInit {
username: string;
  constructor(private tokenstorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenstorage.getToken()) {

    this.username = this.tokenstorage.getUsername();
    console.log (this.username);
  }
}

}
