import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { DataService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  products: Product[] = []
  

  constructor(service: DataService, private router: Router) {
    service.getProducts().subscribe( (response:Product[]) => {
        this.products = response;
    } )
  }

  onClickHandler(product: Product) {
    this.router.navigate(['/product-detail', product.id])
  }


}
