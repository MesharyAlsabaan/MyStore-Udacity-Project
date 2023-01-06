import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: HttpClient) {}

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    city: string
  ) {
    let body = { firstName, lastName, email, password, address, city };
    return this.http.post('http://localhost:3000/user', body).subscribe({
        next: result =>{
            console.log(result);
            
        },error (error){
            console.log(error);
            

        }
    })
  }
}
