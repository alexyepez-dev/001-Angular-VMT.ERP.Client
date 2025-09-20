import { Component } from '@angular/core';
import { WelcomeHeader } from "../../components/welcome-header/welcome-header";
import { WelcomeFooter } from "../../components/welcome-footer/welcome-footer";
import { WelcomeMessage } from "../../components/welcome-message/welcome-message";

@Component({
  selector: 'welcome-page',
  imports: [WelcomeHeader, WelcomeFooter, WelcomeMessage],
  templateUrl: './welcome-page.html',
})
export class WelcomePage {}