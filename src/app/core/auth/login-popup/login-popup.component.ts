import { Component } from '@angular/core';

import { ImportsModule } from '../../../../../imports';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
