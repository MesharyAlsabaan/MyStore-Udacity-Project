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
  getProductDetails(){
    return this.http.get('http://localhost:3000/product/6719');
  }
}
