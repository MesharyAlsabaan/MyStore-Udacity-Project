import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component :LoginComponent
  },
  {
    path: 'signup',
    component :SignUpComponent
  },
  {
    path: 'login',
    component :LoginComponent
  },
  {
    path: 'home',
    component :HomeComponent
  },
  {
    path: 'product-details/:id',
    component :ProductDetailsComponent
  },
  {
    path: 'order',
    component :OrderComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
