import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  private accessToken: any = { name: 'token', value: '', expireDays: -1 };

  /**
   * Given a name, returns a cookie with that name from the browser.
   *
   * Example: getCookie('token')
   *
   * @param name
   * @private
   *
   */
  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    console.log(document.cookie);
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  /**
   * given a name, delete the cookie with that name from the browser.
   *
   * @param cookieName
   * @private
   */
  public deleteCookie(cookieName: string) {
    this.setCookie(cookieName);
  }

  /** Given a name and a cookie, store cookie, with the given name, in the browser.
   *
   * Expires default 1 day
   * If params.session is set and true expires is not added
   * If params.path is not set or value is not greater than 0 its default value will be root "/"
   * Secure flag can be activated only with https implemented
   * Examples of usage:
   * {service instance}.setCookie({name:'token',value:'abcd12345', session:true }); <- This cookie will not expire
   * {service instance}.setCookie({name:'userName',value:'John Doe', secure:true }); <- If page is not https then secure will not apply
   * {service instance}.setCookie({name:'niceCar', value:'red', expireDays:10 }); <- For all this examples if path is not provided default will be root
   */
  public setCookie(params: any) {

    let d: Date = new Date();
    d.setTime(
      d.getTime() +
      (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000
    );
    document.cookie =
      (params.name ? params.name : '') +
      '=' +
      (params.value ? params.value : '') +
      ';' +
      (params.session && params.session
        ? ''
        : 'expires=' + d.toUTCString() + ';') +
      'path=' +
      (params.path && params.path.length > 0 ? params.path : '/') +
      ';' +
      (location.protocol === 'https:' && params.secure && params.secure
        ? 'secure'
        : '');
  }

  login(): Observable<boolean> {
    return of(!!this.accessToken).pipe(tap(() => this.isLoggedIn = true));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}

