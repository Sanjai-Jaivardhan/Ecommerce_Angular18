import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';  
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    SearchComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'ecommerce';
  
  details: any[] = [];

  constructor(
    private detailservice: DetailsService,  
    private cartService: CartService,
    private router:Router    
  ) {}

  ngOnInit(): void {
    this.detailservice.getProducts().subscribe((data) => {
      this.details = data;  
    });
  }


  buyProduct(item: any) {
    console.log('Buying product:', item);
    alert(`You are buying: ${item.title} for ${item.price} INR.`);
    this.router.navigate(['/buy'])
  }


  addToCart(item: any) {
    this.cartService.addToCart(item);  
    console.log('Product added to cart:', item);
    alert(`${item.title} has been added to your cart.`);
    this.router.navigate(['/cart'])
  }
}
