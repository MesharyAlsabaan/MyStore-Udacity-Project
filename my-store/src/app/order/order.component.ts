import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderApiService } from '../shared/services/api/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  constructor(private _orderApiService: OrderApiService
    ,private router: Router) {}

  cartProducts: any;
  totalPrice: number = 0;

  ngOnInit(): void {
    // console.log('what is ');
    
    this.getCart();

    // this._entityId = this._route.snapshot.paramMap.get('id');
    // this.getProductDetails();
  }

  getTotalPrice() {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice = this.totalPrice + this.cartProducts[i].price;
    }
    console.log(this.totalPrice);
    
  }

  async getCart() {
    await this._orderApiService.getCart().subscribe({
      next: (result) => {
        
        this.cartProducts = result;
        console.log(this.cartProducts);
        this.getTotalPrice();
      },
      error: (Error) => {
        alert(Error.error);
      },
    });
  }


  checkOut(){
    alert('Thank you for purchsing from us');
    this.router.navigate(['/home']);

  }
}
