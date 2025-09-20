import { Component } from '@angular/core';
import { LoginUtils } from '../../../../shared/utils/login-utils/login.utils';

@Component({
  selector: 'welcome-footer',
  imports: [],
  templateUrl: './welcome-footer.html',
})
export class WelcomeFooter {
  util = LoginUtils;
}