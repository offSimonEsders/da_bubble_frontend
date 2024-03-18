import { BackendService } from './../../services/backend.service';
import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  @Input() username?: string;
  @Input() email?: string;
  @Input() password?: string;
  previewImage: string = '../../../assets/avatars/anonymus.svg';

  constructor(public router: Router, private backendservice: BackendService) {
  }

  setImage(path: string) {
    this.previewImage = path;
  }

  loadImage(value: any) {
    if(value) {
      const avatar: any = new File([value[0]], this.username + '_avatar');
      this.previewImage = URL.createObjectURL(avatar);
      this.createFormdata(value[0]);
    }
  }
  
  createFormdata(avatar: Blob) {
    if(this.username && this.email && this.password) {
      let formData = new FormData();
      formData.append('username', this.username);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('avatar', avatar);
      this.registerNewUser(formData);
    }
  }

  async registerNewUser(formData: FormData) {
    const resp = await this.backendservice.registerNewUser(formData);
  }

}
