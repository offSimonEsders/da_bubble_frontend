import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './../../services/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email: FormControl = new FormControl('', [Validators.required, Validators.pattern(this.emailRegExp)]);
  password: FormControl = new FormControl('', [Validators.required]);

  loginFG: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor(private backendService: BackendService) {
  }

  async login() {
    if (this.loginFG.valid) {
      const loginData: FormData = new FormData();
      loginData.append('email', this.email.value);
      loginData.append('password', this.password.value);
      console.log(await (await this.backendService.login(loginData)).json());
    }
  }

}
