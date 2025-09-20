import { Component } from '@angular/core';
import { WelcomeHeader } from "../../../welcome/components/welcome-header/welcome-header";
import { WelcomeFooter } from "../../../welcome/components/welcome-footer/welcome-footer";

@Component({
  selector: 'app-teams-page',
  imports: [WelcomeHeader, WelcomeFooter],
  templateUrl: './teams-page.html',
})
export class TeamsPage {}