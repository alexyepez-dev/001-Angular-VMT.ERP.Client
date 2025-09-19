import { Component } from '@angular/core';
import { LoginUtils } from '../../../../shared/utils/login-utils/login.utils';

@Component({
  selector: 'login-footer',
  imports: [],
  templateUrl: './login-footer.html',
})
export class LoginFooter {
  util = LoginUtils;
}