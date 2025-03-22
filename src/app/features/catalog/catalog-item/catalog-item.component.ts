import { Component, inject, OnInit, signal } from '@angular/core';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { CatalogService } from '../catalog.service';
import { Company } from '../../../core/models/types';

@Component({
  selector: 'app-catalog-item',
  imports: [PrimeModule],
  standalone: true,
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss',
  providers: [CatalogService],
})
export class CatalogItemComponent implements OnInit {
  services = signal<any>([]);

  catalogService: CatalogService = inject(CatalogService);

  ngOnInit() {
    this.catalogService.getCompanies().then((data: string | any[]) => {
      const d = data.slice(0, 5);
      this.services.set([...d]);
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
