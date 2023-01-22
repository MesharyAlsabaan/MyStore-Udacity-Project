import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderApiService } from '../shared/services/api/order.service';
import { ProductApiService } from '../shared/services/api/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  _entityId: any;
  product:any;
  constructor (private _route: ActivatedRoute,
    private _productApiService: ProductApiService,
    private _orderApiService:OrderApiService
    ,private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._entityId = this._route.snapshot.paramMap.get('id');
    console.log(this._entityId);
    
    this.getProductDetails(this._entityId);
    
  }

  async getProductDetails(id:any) {
    await this._productApiService.getProductDetails(id).subscribe({
      next: (result) => {
       this.product = result;
      },
      error: (Error) => {
        alert(Error.error);
      },
    });
  }

async addCard(){
    await this._orderApiService.createOrder();
    alert('Please go to the cart to see all products');
    this.router.navigate(['/order']);

  }

}
