import { Component } from '@angular/core';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  visible: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.visible = false; // Закрываем окно после успешного входа
      },
      error: (error) => {
        console.error('Login failed', error);
      },
    });
  }
}
