import { HttpHandler } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { SignUpInfo } from './../auth/signup-info';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  errorMessage = '';
  isSignUpFailed = false;


  constructor(private authService: AuthService, private router: Router, resp: HttpHandler) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignUpFailed = false;

        if (this.form.valid) {
          this.router.navigateByUrl('/signIn');

        } else {
          return;
        }

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
        this.isSignUpFailed = true;


      }
    );
  }
}
