import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Product } from 'src/app/core/interfaces/product';

@Component({
	selector: 'app-card-product',
	standalone: true,
	imports: [CommonModule, LazyLoadImageModule],
	templateUrl: './card-product.component.html',
	styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
	@Input() product!: Product;
	@Input() borderColor!: string;

	defaultImage =
		'https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif';
}
