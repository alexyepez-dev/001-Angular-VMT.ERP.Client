import { Component } from '@angular/core';
import { Welcome } from "../../components/welcome/welcome";

@Component({
  selector: 'app-welcome-page',
  imports: [Welcome],
  templateUrl: './welcome-page.html',
})
export class WelcomePage {}