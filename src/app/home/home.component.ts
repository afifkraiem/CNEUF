import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles: any [];
  auth: string;

  constructor(private tokenstorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenstorage.getToken()) {

        this.roles = this.tokenstorage.getAuthorities();
        this.roles.every(role => {
          if (role.authority === 'ROLE_ADMIN') {
            this.auth = 'admin';
            return false;
          } else if (role.authority === 'ROLE_PM') {
            this.auth = 'pm';
            return false;
          }
          this.auth = 'user';
          return true;
        });


      }
  }
}
