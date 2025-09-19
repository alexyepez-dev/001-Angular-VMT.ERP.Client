import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { LoginFooter } from "../../components/login-footer/login-footer";
import { LoginHeader } from "../../components/login-header/login-header";

@Component({
  selector: 'login-page',
  imports: [LoginForm, LoginFooter, LoginHeader],
  templateUrl: './login-page.html',
})
export class LoginPage {}