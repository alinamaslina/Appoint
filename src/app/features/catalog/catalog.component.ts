import { Component } from '@angular/core';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';

@Component({
  selector: 'app-catalog',
  imports: [CatalogItemComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {}
