import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ChooseAvatarComponent } from "../choose-avatar/choose-avatar.component";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [NgIf, ReactiveFormsModule, RouterOutlet, ChooseAvatarComponent]
})
export class RegisterComponent {
  emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nameInput: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(this.emailRegExp)]);
  passwordInput: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  checkBox: FormControl = new FormControl('', [Validators.requiredTrue]);

  registerFG = new FormGroup({
    name: this.nameInput,
    email: this.emailInput,
    password: this.passwordInput,
    checkbox: this.checkBox
  })

  constructor(public router: Router, private route: ActivatedRoute) {
    this.checkRoute();
  }

  checkRoute() {
    if (!this.registerFG.valid) {
      this.router.navigate(['/register']);
    }
  }
}
