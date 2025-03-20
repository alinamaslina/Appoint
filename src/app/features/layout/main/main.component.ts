import { Component } from '@angular/core';
import { CatalogComponent } from '../../catalog/catalog.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CatalogComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
