import { TokenStorageService } from './../auth/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { AuthLoginInfo } from './../auth/login-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: any = {};
  private loginInfo: AuthLoginInfo;
  errorMessage: '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.tokenStorage.signOut();

  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
       this.router.navigateByUrl('/home');
      window.location.reload();


      },
      error => {
        console.log(error);
        this.errorMessage = error.error.reason;
      }
    );
  }

}
