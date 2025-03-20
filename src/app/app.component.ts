import { Component } from '@angular/core';

import { HeaderComponent } from './features/layout/header/header.component';
import { MainComponent } from './features/layout/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appoint';
}
