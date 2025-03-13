import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
