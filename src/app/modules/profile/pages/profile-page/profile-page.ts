import { Component } from '@angular/core';
import { Profile } from "../../components/profile/profile";
import { WelcomeFooter } from "../../../welcome/components/welcome-footer/welcome-footer";
import { WelcomeHeader } from '../../../welcome/components/welcome-header/welcome-header';

@Component({
  selector: 'profile-page',
  imports: [Profile, WelcomeFooter, WelcomeHeader],
  templateUrl: './profile-page.html',
})
export class ProfilePage {}