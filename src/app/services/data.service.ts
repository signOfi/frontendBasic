import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("https://api.escuelajs.co/api/v1/categories")
  }

  getProducts():  Observable<Product[]> {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(('https://api.escuelajs.co/api/v1/products/' + id));
  }

}
