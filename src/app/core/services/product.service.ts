import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { HttpResponseEntity } from '../interfaces/http.response.entity';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mocks = '/assets/mocks/product.json'

  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponseEntity<Product[]>> {
    return this.http.get<HttpResponseEntity<Product[]>>(`${this.mocks}`);
  }

  findById(id: string): Observable<HttpResponseEntity<Product>> {
    return this.http.get<HttpResponseEntity<Product>>(`${this.mocks}/${id}`);
  }

  getAllCategories(): Observable<string[]> {
    return this.findAll().pipe(
      map(response => {
        const categories: string[] = [];
        response.data.forEach(shoe => {
          if (!categories.includes(shoe.category)) {
            categories.push(shoe.category);
          }
        });
        return categories;
      })
    );
  }

}
