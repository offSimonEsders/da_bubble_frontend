import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './../../services/backend.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private backendService: BackendService, private router: Router) {
  }

  async login() {
    if (this.loginFG.valid) {
      const loginData: FormData = new FormData();
      loginData.append('email', this.email.value);
      loginData.append('password', this.password.value);
      const resp: Response = await this.backendService.login(loginData);
      this.responseIsOK(resp);
    }
  }

  async responseIsOK(resp: Response) {
    if(resp.ok) {
      const data = await resp.json();
      localStorage.setItem('authtoken', data['authtoken']);
      this.router.navigate(['/home']);
    }
  }

}
