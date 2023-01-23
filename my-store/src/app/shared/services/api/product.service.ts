import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllProducts() :Observable<Product[]> {
   return this.http.get<Product[]>('http://localhost:3000/product');
  }
  getProductDetails(id:any):Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/product/${id}`);
  }

  createProduct(){
    let body = { name: 'iphone', price: 12 };

    return this.http.post('http://localhost:3000/product', body, { responseType: 'text' })
    .subscribe({
      next: (result) => {
      },
      error: (Error) => {
          alert(Error.error);
        },
    });
  }
}
