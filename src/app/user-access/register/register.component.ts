import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  nameInput: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailInput: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordInput: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  checkBox: FormControl = new FormControl('', [Validators.requiredTrue]);

  registerFG = new FormGroup({
    name: this.nameInput,
    email: this.emailInput,
    password: this.passwordInput,
    checkbox: this.checkBox
  })

  constructor (public router: Router) {
  }
}
