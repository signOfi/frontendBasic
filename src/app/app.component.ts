import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, ProductPageComponent, ProductDetailComponent, ProductDetailPageComponent, ContactPageComponent, AboutPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
