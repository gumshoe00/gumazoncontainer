import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, CanLoad, NavigationExtras, Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private sessionSvc: SessionService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }


  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }


  checkLogin(url: any): boolean {
    if (this.sessionSvc.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.sessionSvc.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId }
    };

    if (!!url.frament) {
      navigationExtras.fragment = url.frament
    }

    // Navigate to the login page with extras
    this.router.navigate(['auth', 'login'], navigationExtras);
    return false;
  }

}
