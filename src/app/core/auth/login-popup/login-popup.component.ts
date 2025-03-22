import { Component } from '@angular/core';
import { PrimeModule } from '../../../shared/modules/prime.module';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
