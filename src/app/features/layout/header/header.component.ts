import { Component, ViewChild } from '@angular/core';
import { LoginPopupComponent } from '../../../core/auth/login-popup/login-popup.component';

@Component({
  selector: 'app-header',
  imports: [LoginPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild(LoginPopupComponent) loginPopup!: LoginPopupComponent;

  openDialog() {
    this.loginPopup.showDialog();
  }
}
