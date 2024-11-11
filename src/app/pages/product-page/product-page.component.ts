import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductComponent } from "../../components/product/product.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
