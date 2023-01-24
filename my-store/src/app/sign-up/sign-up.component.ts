import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserApiService } from '../shared/services/api/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private _userApiService: UserApiService) {}
  name: string = '';
  _gender:string = '';
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    let value = this.profileForm.value;

    this._userApiService.createUser(
      value.firstName,
      value.lastName,
      value.email,
      value.password,
      value.address,
      value.city
    );
  }
  gender(gender:any){

    this._gender = gender;
    

  }
}
