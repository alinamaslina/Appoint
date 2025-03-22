import { Component, inject, signal } from '@angular/core';
import { ImportsModule } from '../../../../../imports';
import { CatalogService } from '../catalog.service';
import { Company } from '../../../core/models/types';

@Component({
  selector: 'app-catalog-item',
  imports: [ImportsModule],
  standalone: true,
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss',
  providers: [CatalogService],
})
export class CatalogItemComponent {
  products = signal<any>([]);

  catalogService: CatalogService = inject(CatalogService);

  ngOnInit() {
    this.catalogService.getProducts().then((data: string | any[]) => {
      const d = data.slice(0, 5);
      this.products.set([...d]);
    });
  }

  getSeverity(product: Company | null) {
    switch (product?.inventoryStatus!) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
