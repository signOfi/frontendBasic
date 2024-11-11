import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Category } from '../../model/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(service: DataService) {
    service.getCategories().subscribe( (response: Category[]) => {
      this.categories = response;
    } )
  };

}
