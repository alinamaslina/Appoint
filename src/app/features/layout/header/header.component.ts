import { Component } from '@angular/core';
import { LoginPopupComponent } from '../../../core/auth/login-popup/login-popup.component';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [LoginPopupComponent, PrimeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AuthService],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}
}
