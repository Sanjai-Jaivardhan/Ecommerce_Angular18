import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;  
}

@Component({
  selector: 'app-cart',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<Product[]>; 
  totalPrice$!: Observable<number>; 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   
    this.cartItems$ = this.cartService.getCart();
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

  removeItem(item: Product): void {
    this.cartService.removeFromCart(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
