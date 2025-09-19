import { Component } from '@angular/core';
import { toggleMobileMenu } from '../../../../shared/utils/login-utils/login.utils';
import { NgClass } from '@angular/common';

@Component({
  selector: 'welcome-component',
  imports: [NgClass],
  templateUrl: './welcome.html',
})
export class Welcome {
  isMobileMenuOpen = false;
  isProfileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = toggleMobileMenu(this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}