import { AfterViewInit, Component } from '@angular/core';
import { WelcomeHeader } from '../../../welcome/components/welcome-header/welcome-header';
import { WelcomeFooter } from '../../../welcome/components/welcome-footer/welcome-footer';
import { Settings } from '../../components/settings/settings';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-settings-page',
  imports: [WelcomeHeader, WelcomeFooter, Settings],
  templateUrl: './settings-page.html',
})
export class SettingsPage implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 0);
  }
}