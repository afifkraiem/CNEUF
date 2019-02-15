import { TokenStorageService } from './../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: any;
  roles: any [];
  auth: string;
  isLoggedIn = false;

  constructor(private tokenstorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenstorage.getToken()) {
     this.isLoggedIn = true;
    this.info = {
      username: this.tokenstorage.getUsername() };
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
        console.log(this.auth);
        console.log(this.roles);

      }
  }
logout() {
  this.tokenstorage.signOut();
  window.location.reload();
}
}
