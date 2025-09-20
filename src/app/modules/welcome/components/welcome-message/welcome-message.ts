import { Component } from '@angular/core';
import { WelcomeUtils } from '../../../../shared/utils/welcome-utils/welcome.util';

@Component({
  selector: 'welcome-message',
  imports: [],
  templateUrl: './welcome-message.html',
})
export class WelcomeMessage {
  util = WelcomeUtils;
}