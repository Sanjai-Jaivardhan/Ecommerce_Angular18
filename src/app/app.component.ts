import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsService } from './details.service';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
// import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HomepageComponent,
    NavbarComponent,
    SearchComponent,
    HomepageComponent,
    // CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  constructor(private detailservice:DetailsService){

  }
  details:any[] =[]
  ngOnInit(): void {
    this.detailservice.getProducts().subscribe((data)=>{
    this.details = data;
    });
    
  }

}
