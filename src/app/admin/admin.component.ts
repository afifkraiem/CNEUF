import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username: string;
  constructor( private tokenstorage: TokenStorageService) { }

  ngOnInit() {
if (this.tokenstorage.getToken()) {
  this.username = this.tokenstorage.getUsername();
}
  }

}
