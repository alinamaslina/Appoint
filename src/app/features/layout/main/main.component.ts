import { Component } from '@angular/core';
import { CatalogComponent } from '../../catalog/catalog.component';

@Component({
  selector: 'app-main',
  imports: [CatalogComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
