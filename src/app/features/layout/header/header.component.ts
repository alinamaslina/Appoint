import { Component } from '@angular/core';
import { LoginPopupComponent } from '../../../core/auth/login-popup/login-popup.component';
import { PrimeModule } from '../../../shared/modules/prime.module';

@Component({
  selector: 'app-header',
  imports: [LoginPopupComponent, PrimeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
