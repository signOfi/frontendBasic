import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { User } from '../../model/user';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private router: Router, private authService: AuthService) {

  }

  onClickLogin() {
    this.router.navigate(['/login']);
  }

  user: User = {};
  textMessage = ''
  alertClass = ''

  onSubmitHandler() {
    this.user.avatar="https://api.lorem.space/image/face?w=150&h=220";
    this.authService.register(this.user).subscribe( (data: any) => {
      this.textMessage = 'user registered successfully'
      this.alertClass = 'alert alert-success'
      console.log(data) 
    },
    (error: any) => {
      console.log("Error")
      this.textMessage = 'user registered failed'
      this.alertClass = 'alert alert-danger'
    } 
  )
  }

}
