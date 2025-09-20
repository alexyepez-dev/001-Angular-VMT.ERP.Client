import { Component } from '@angular/core';
import { Profile } from "../../components/profile/profile";
import { WelcomeHeader } from "../../../welcome/components/welcome-header/welcome-header";
import { WelcomeFooter } from "../../../welcome/components/welcome-footer/welcome-footer";

@Component({
  selector: 'profile-page',
  imports: [Profile, WelcomeHeader, WelcomeFooter],
  templateUrl: './profile-page.html',
})
export class ProfilePage {}