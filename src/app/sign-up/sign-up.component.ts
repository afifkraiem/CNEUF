import { AuthService } from './../auth/auth.service';
import { SignUpInfo } from './../auth/signup-info';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  errorMessage = '';
  submitted = false;

  constructor(private authService: AuthService, private router: Router) { }

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

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      }
    );
this.router.navigateByUrl('/signIn');
  }
}
