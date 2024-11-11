import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'home'},
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent, canActivate: [AuthGuard]},
    { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductPageComponent, canActivate: [AuthGuard] },
    { path: 'product-detail/:id', component: ProductDetailPageComponent, canActivate: [AuthGuard]}, 
    { path: 'register', component:RegisterPageComponent }, 
    { path: 'login', component: LoginPageComponent }
];
