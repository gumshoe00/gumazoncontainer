import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, public authSvc: SessionService, public router: Router) {
    this.form = this.loginForm();
  }

  ngOnInit(): void {

  }

  loginForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
  }

  login(){
    let b = this.form?.value
    console.log(b)



    this.authSvc.login().subscribe(() => {
      if (this.authSvc.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        let redirectUrl = this.authSvc.redirectUrl || '/auth/profile'

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras).then(r => console.log('login-nav.router', r));
      }
    });
  }

  logout() {
    this.authSvc.logout();
    console.log("logged out");
  }

}
