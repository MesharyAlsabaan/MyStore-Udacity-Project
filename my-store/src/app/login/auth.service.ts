import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId:any

  constructor() { }


  storeToken(Token: any,userId:any) {
    localStorage.setItem('JWT_TOKEN', Token);
    localStorage.setItem('userId', userId);
  }

  deleteToken() {
    localStorage.removeItem('JWT_TOKEN');
  }

  GetToken(): boolean {
    let jwt = localStorage.getItem('JWT_TOKEN');
    return jwt != null;
  }
  getUserId(): any {
    let userId = localStorage.getItem('userId');
    return userId;
  }
}
