import { Component } from '@angular/core';
import { CategoryComponent } from "../../components/category/category.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryComponent, HeaderComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
