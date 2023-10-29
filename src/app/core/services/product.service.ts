import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { HttpResponseEntity } from '../interfaces/http.response.entity';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private mocks = '/assets/mocks/product.json';

	constructor(private http: HttpClient) {}

	findAll(): Observable<HttpResponseEntity<Product[]>> {
		return this.http.get<HttpResponseEntity<Product[]>>(`${this.mocks}`).pipe(catchError(this.handleError));;
	}

	findById(id: string): Observable<HttpResponseEntity<Product>> {
		return this.http.get<HttpResponseEntity<Product>>(
			`${this.mocks}/${id}`,
		).pipe(catchError(this.handleError));;
	}

  sortByLowest(): Observable<Product[]> {
    return this.findAll()
    .pipe(
        map((response) => {
          return response.data.slice().sort((a, b) => a.price - b.price);
        }),
        catchError(this.handleError)
      );
  }

  sortByHighest(): Observable<Product[]> {
    return this.findAll()
    .pipe(
        map((response) => {
          return response.data.slice().sort((a, b) => b.price - a.price);
        }),
        catchError(this.handleError)
      );
  }

	findByName(query: string): Observable<Product[]> {
		return this.findAll().pipe(
			map((response) =>
				response.data.filter((product) =>
					product.name.toLowerCase().includes(query.toLowerCase()),
				),
			),
      catchError(this.handleError)
		);
	}

	findAllCategories(): Observable<string[]> {
		return this.findAll().pipe(
			map((response) => {
				const categories: string[] = [];
				response.data.forEach((shoe) => {
					if (!categories.includes(shoe.category)) {
						categories.push(shoe.category);
					}
				});
				return categories;
			}),
      catchError(this.handleError)
		);
	}

	findByCategory(category: string): Observable<Product[]> {
		return this.findAll().pipe(
			map((response) =>
				response.data.filter((item) => item.category === category),
			),
      catchError(this.handleError)
		);
	}

	filterByPriceRange(priceRange: {
		minPrice: number;
		maxPrice: number;
	}): Observable<Product[]> {
		return this.findAll().pipe(
			map((response) =>
				response.data.filter(
					(shoe) =>
						shoe.price >= priceRange.minPrice &&
						shoe.price <= priceRange.maxPrice,
				),
			),
      catchError(this.handleError)
		);
	}

	filterBySize(selectedSizes: string[]): Observable<Product[]> {
		return this.findAll().pipe(
			map((response) =>
				response.data.filter((shoe) =>
					shoe.sizes.some((size) => selectedSizes.includes(size)),
				),
			),
      catchError(this.handleError)
		);
	}

	filterShoes(filters: {
		category?: string;
		priceRange?: { minPrice: number; maxPrice: number };
		selectedSizes?: string[];
	}): Observable<Product[]> {
		return this.findAll().pipe(
			map((response: HttpResponseEntity<Product[]>) => {
				let filteredShoes = response.data;

				if (filters.category) {
					filteredShoes = filteredShoes.filter(
						(shoe) => shoe.category === filters.category,
					);
				}

				if (filters.priceRange) {
					filteredShoes = filteredShoes.filter(
						(shoe) =>
							shoe.price >= filters.priceRange!.minPrice &&
							shoe.price <= filters.priceRange!.maxPrice,
					);
				}

				if (filters.selectedSizes && filters.selectedSizes.length > 0) {
					filteredShoes = filteredShoes.filter((shoe) =>
						shoe.sizes.some((size) =>
							filters.selectedSizes!.includes(size),
						),
					);
				}

				return filteredShoes;
			}),
      catchError(this.handleError)
		);
	}

  public handleError(res: HttpErrorResponse) {
    return throwError(() => new Error(res.error.message));
  }
}
