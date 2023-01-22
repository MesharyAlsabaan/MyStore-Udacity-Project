import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllProducts() {
   return this.http.get('http://localhost:3000/product');
  }
  getProductDetails(id:any){
    return this.http.get(`http://localhost:3000/product/${id}`);
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
