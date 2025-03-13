import { Component } from '@angular/core';

import { ImportsModule } from '../../../../../imports';

@Component({
  selector: 'app-catalog-item',
  imports: [ImportsModule],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss',
})
export class CatalogItemComponent {}
