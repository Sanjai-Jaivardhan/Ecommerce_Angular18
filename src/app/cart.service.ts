import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart); 
  private totalPriceSubject = new BehaviorSubject<number>(0); 

  constructor() {}

  
  getCart() {
    return this.cartSubject.asObservable();
  }

  
  getTotalPrice() {
    return this.totalPriceSubject.asObservable();
  }

  
  addToCart(item: Product) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cart.push(item);
    }
    this.cartSubject.next(this.cart); 
    this.updateTotalPrice(); 
  }

  
  removeFromCart(item: Product) {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart); 
      this.updateTotalPrice(); 
    }
  }

  
  decreaseQuantity(item: Product) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      this.cartSubject.next(this.cart); 
      this.updateTotalPrice(); 
    }
  }

  
  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart); 
    this.updateTotalPrice(); 
  }

  
  private updateTotalPrice() {
    const totalPrice = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    this.totalPriceSubject.next(totalPrice); 
  }

  getTotalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
}
