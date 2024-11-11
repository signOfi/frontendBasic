import { Component } from '@angular/core';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [ProductDetailComponent, NavbarComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {

}
