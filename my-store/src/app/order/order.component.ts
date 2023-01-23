import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.getCart();
    // this.getTotalPrice();
  }
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.minLength(10), Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]),
    date: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.minLength(3), Validators.pattern("^[0-9]*$"),Validators.maxLength(3)]),

  });

  getTotalPrice() {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice = this.totalPrice + this.cartProducts[i].price;
    }    
  }

  async getCart() {
    await this._orderApiService.getCart().subscribe({
      next: (result) => {
        this.cartProducts = result;
        console.log(result);
        
        this.getTotalPrice();
      },
      error: (Error) => {
        alert(Error.error);
      },
    });
  }


  checkOut(){
    this.router.navigate(['/home']);
  }
  goHome(){
    this.router.navigate(['/home']);
  }


  deleteProduct(id:any){

    this._orderApiService.deleteCart(id);

    location.reload();
    

  }
}
