import { Component, OnInit } from '@angular/core';

import { HttpResponseEntity } from 'src/app/core/interfaces/http.response.entity';
import { MatRadioChange } from '@angular/material/radio';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';
import { SIZE_NUMBER } from 'src/app/shared/utils/list-of-size';
import { SizeNumber } from 'src/app/core/interfaces/list-of-size.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	protected max: number = 100;
	protected min: number = 0;
	protected categories!: string[];
	protected sizeCategories = SIZE_NUMBER;

	protected selectedSize!: SizeNumber;
	protected selectedSizeArray: SizeNumber[] = [];
	protected sizeNumbers!: SizeNumber[];
	protected selectedOptions!: string;

	protected selectedCategory!: string;
	protected size: string[] = [];
	protected products!: Product[];

	constructor(private readonly productService: ProductService) {}

	ngOnInit(): void {
		this.findAll();
		this.findCategories();
	}

	findAll(): void {
		this.productService.findAll().subscribe({
			next: (response: HttpResponseEntity<Product[]>) => {
				this.products = response.data;
			},
		});
	}

	findCategories(): void {
		this.productService.findAllCategories().subscribe({
			next: (data: string[]) => {
				this.categories = data;
			},
		});
	}

	onSelectCategory(event: MatRadioChange): void {
		this.selectedCategory = event.value;
	}

	protected onSliderChange() {
		// console.log({min: this.min, max: this.max});
	}

	public onSelectedSize(data: SizeNumber[]): void {
		this.sizeNumbers = data;
		this.sizeNumbers.forEach((value: SizeNumber) => {
			this.size.push(value.number);
		});
	}

	filterByCategory() {
		this.productService.findByCategory(this.selectedCategory).subscribe({
			next: (response) => {
				console.log(response);
			},
		});
	}

	filterByPriceRange() {
		const priceRange = { minPrice: this.min, maxPrice: this.max };
		this.productService.filterByPriceRange(priceRange).subscribe({
			next: (response) => {
				console.log(response);
			},
		});
	}

	filterBySize() {
		this.productService.filterBySize(this.size).subscribe({
			next: (response) => {
				console.log(response);
			},
		});
	}

	filterAll() {
		let filters = {
			category: this.selectedCategory,
			priceRange: { minPrice: this.min, maxPrice: this.max },
			selectedSizes: this.size,
		};
		this.productService.filterShoes(filters).subscribe({
			next: (products: Product[]) => {
				console.log(products);
				this.products = products;
			},
		});
	}

	submit() {
		console.log({
			category: this.selectedCategory,
			range: {
				min: this.min,
				max: this.max,
			},
			size: this.sizeNumbers,
		});
	}
}
