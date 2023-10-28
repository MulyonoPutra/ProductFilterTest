import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interfaces/product';

@Component({
	selector: 'app-card-product',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-product.component.html',
	styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
	@Input() product!: Product;
}
