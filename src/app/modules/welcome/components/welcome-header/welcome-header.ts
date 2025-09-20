import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'welcome-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './welcome-header.html',
})
export class WelcomeHeader implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 0);
  }
}