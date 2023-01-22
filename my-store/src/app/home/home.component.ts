import { Component } from '@angular/core';
import { ProductApiService } from '../shared/services/api/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any;
  constructor(
    private _productApiService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }


  async getAllProducts() {
    await this._productApiService.getAllProducts().subscribe({
      next: (result) => {
        this.products = result;
      },
      error: (Error) => {
        alert(Error.error);
      },
    });
  }

  openMenu(id: any) {    
    this.router.navigate(['/product-details', id]);
  }

 async createProduct(){
    await this._productApiService.createProduct()
    this.ngOnInit();
}

}
