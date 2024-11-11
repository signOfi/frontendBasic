import { Component } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

   loginForm: FormGroup;
   user: User = {};
   message: string = '';
   alertClass: string = ''

  constructor (private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    }) 
  };

  onClickRegister() {
    this.router.navigate(['/register']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password')
  }

  onSubmitHandler() {

    /* Create the user from the input */
    this.user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(this.user).subscribe( (data: any) => {
      this.message = "Login was succesfull!"
      this.alertClass = "alert alert-success"
      localStorage.setItem('token', data.access_token);
      console.log(data)
      this.router.navigate(['/home'])
    }, (error: any) => {
      this.message = "Invalid Credentials"
      this.alertClass = "alert alert-danger"
    } 
  )
  }


}
