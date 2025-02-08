import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private api="https://fakestoreapi.com/products"
  
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  
}
