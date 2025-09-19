import { Component } from '@angular/core';
import { LoginUtils } from '../../../../shared/utils/login-utils/login.utils';

@Component({
  selector: 'login-header',
  imports: [],
  templateUrl: './login-header.html',
})
export class LoginHeader {
  util = LoginUtils;
}