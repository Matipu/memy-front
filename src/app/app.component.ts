import {Component, ViewEncapsulation} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private isLogin: boolean;

  constructor(private loginService: LoginService) {
    this.isLogin = loginService.isLogin();
  }
}
