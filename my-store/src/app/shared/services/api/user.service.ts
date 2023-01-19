import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service'
import jwt_decode from 'jwt-decode';



@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: HttpClient, private router: Router ,private _authService:AuthService) {}

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    city: string
  ) {
    let body = { firstName, lastName, email, password, address, city };
    this.http
      .post('http://localhost:3000/user', body, { responseType: 'text' })
      .subscribe({
        next: (result) => {
          this.router.navigate(['/login']);
        },
        error: (Error) => {
          alert(Error.error);
        },
      });
  }

  login(email: string, password: string) {
    let body = { email, password };
    return this.http
      .post('http://localhost:3000/user/login', body, { responseType: 'text' })
      .subscribe({
        next: (result) => {
          console.log(result);
          var decoded:any = jwt_decode(result);
          this._authService.storeToken(result,decoded.user[0].userid);

          // this._authService.userId = decoded.user[0].userid;
          
          // console.log(decoded.user[0].userid);
          this.router.navigate(['/home']);

        },
        error: (Error) => {
            alert(Error.error);
          },
      });
  }
}
