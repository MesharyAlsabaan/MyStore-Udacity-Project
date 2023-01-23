import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient, private router: Router, private _authService:AuthService) { }


  createOrder(){

    let token = this._authService.GetToken();
    let userId = this._authService.getUserId();
    

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': `${token}`
    })



    
    return this.http
      .post(`http://localhost:3000/addCard/${userId}`,null,{headers:headers})
      .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (Error) => {
            alert(Error);
          },
      });
  }


 getCart(){
  let token = this._authService.GetToken();
  let userId = this._authService.getUserId();

  return this.http.get(`http://localhost:3000/cart/${userId}`);
 }

 deleteCart(id:any){
   console.log(id);
   

  return this.http.delete(`http://localhost:3000/cart/${id}`).subscribe({
    next:(result)=>{
      
    }
  })

 }
}
