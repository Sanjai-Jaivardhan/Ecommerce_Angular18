import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path: '',component:HomepageComponent},
    {path:'cart',component:CartComponent},
    {path:'buy',component:PaymentComponent}
];
