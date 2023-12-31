import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit='8', sort = 'desc', category?: string): Observable<Array<Product>> {
    console.log('categor is: ', category)
    const url = `${STORE_BASE_URL}/products${category ? ('/category/' + category) : ''}?sort=${sort}&limit=${limit}`;
    console.log('received, ', url);

    return this.httpClient.get<Array<Product>>(url);
  }

  getAllCategories(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    )
  }
}
