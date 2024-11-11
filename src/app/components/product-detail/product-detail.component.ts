import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  id: number = 0;

  /* Default Product */
  product: Product = {
    id: -1,
    title: "",
    price: -1,
    description: "Default Text",
    images: [""],
    category: {
      id: -1, name: "default", image: "default.jpg"
    }
  };

  constructor(service: DataService, activateRoute: ActivatedRoute) {

    this.id = Number(activateRoute.snapshot.paramMap.get('id'));

    service.getProductById(this.id).subscribe( (response: Product) => {
      this.product = response
    });

  }

}
