import { BackendService } from './../../services/backend.service';
import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent implements OnInit {
  @Input() username?: string;
  @Input() email?: string;
  @Input() password?: string;
  @Input() formValid: boolean = false;
  previewImage: string = '../../../assets/avatars/anonymus.png';
  customAvatar?: Blob = undefined;
  choosenAvatar?: string = undefined;

  constructor(public router: Router, private backendservice: BackendService) {
  }

  ngOnInit(): void {
    if (this.username === '' || this.email === '' || this.password === '' || this.formValid === false) {
      this.router.navigate(['/register']);
    }
  }

  setImage(path: string) {
    this.previewImage = path;
    this.choosenAvatar = path;
    this.customAvatar = undefined;
  }

  loadImage(value: FileList | null) {
    if (value) {
      this.previewImage = URL.createObjectURL(value[0] as Blob);
      this.customAvatar = value[0];
    }
  }

  async validateAvatarAndContinueWithRegistration() {
    if (this.customAvatar) {
      this.createFormdata(this.customAvatar);
    } else if (this.choosenAvatar) {
      const resp = await fetch(this.choosenAvatar, { method: 'GET' });
      this.createFormdata(await resp.blob());
    }
  }

  createFormdata(avatar: Blob) {
    if (this.username && this.email && this.password) {
      const file = new File([avatar], 'avatar.png', { type: 'image/png' });
      const formData = new FormData();
      formData.append('username', this.username);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('avatar', file);
      this.callBackendServiceAndvalidateResponse(formData);
    }
  }

  async callBackendServiceAndvalidateResponse(formData: FormData) {
    const resp = await this.backendservice.registerNewUser(formData);
  }

}
