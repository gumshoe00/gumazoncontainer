import {Component, Inject} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import {SessionService} from "./authentication/session.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gumazon';
  view = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  }

  settingsClosed = true;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private sess: SessionService) {
    console.log(localStorage)
  }

  toggleSettings() {

    this.settingsClosed = !this.settingsClosed;
  }


}
