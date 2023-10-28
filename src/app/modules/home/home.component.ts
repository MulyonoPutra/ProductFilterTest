import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {
	private destroy = new Subject<void>();
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

	/**
	 * Find All Products
    @returns Product[]
	 */
	public findAll(): void {
		this.productService
			.findAll()
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (response: HttpResponseEntity<Product[]>) => {
					this.products = response.data;
				},
			});
	}

	/**
	 * Find All Categories
    @returns string[]
	 */
	public findCategories(): void {
		this.productService
			.findAllCategories()
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (data: string[]) => {
					this.categories = data;
				},
			});
	}

	/**
	 * Search category from radio button
	 */
	public onSelectCategory(event: MatRadioChange): void {
		this.selectedCategory = event.value;
	}

	protected onSliderChange() {
		// console.log({min: this.min, max: this.max});
	}

	/**
	 * Search product by name
    @returns Product[]
	 */
	public onSearch(query: string): void {
		console.log(query);
		this.productService
			.findByName(query)
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (products) => {
					this.products = products;
				},
			});
	}

	/**
	 * Selected list of size products
	 */
	public onSelectedSize(data: SizeNumber[]): void {
		this.sizeNumbers = data;
		this.sizeNumbers.forEach((value: SizeNumber) => {
			this.size.push(value.number);
		});
	}

	/**
	 * Unused Functions: Only used for filter data by Categories
	 */
	public filterByCategory(): void {
		this.productService
			.findByCategory(this.selectedCategory)
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (response) => {
					console.log(response);
				},
			});
	}

	/**
	 * Unused Functions: Only used for filter data by Price Range
	 */
	public filterByPriceRange(): void {
		const priceRange = { minPrice: this.min, maxPrice: this.max };
		this.productService
			.filterByPriceRange(priceRange)
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (response) => {
					console.log(response);
				},
			});
	}

	/**
	 * Unused Functions: Only used for filter data by Size
	 */
	public filterBySize(): void {
		this.productService
			.filterBySize(this.size)
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (response) => {
					console.log(response);
				},
			});
	}

	/**
	 * Fiter by categories, price ranges and size ranges
	 */
	public filterAll(): void {
		let filters = {
			category: this.selectedCategory,
			priceRange: { minPrice: this.min, maxPrice: this.max },
			selectedSizes: this.size,
		};
		this.productService
			.filterShoes(filters)
			.pipe(takeUntil(this.destroy))
			.subscribe({
				next: (products: Product[]) => {
					this.products = products;
				},
			});
	}

	/**
	 * Unsubscribe to avoid memory leaks
	 */
	ngOnDestroy(): void {
		this.destroy.next();
		this.destroy.complete();
	}
}
