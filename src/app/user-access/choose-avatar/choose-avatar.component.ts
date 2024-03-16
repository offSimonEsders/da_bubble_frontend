import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  @Input() name?: string;
  previewImage: string = '../../../assets/avatars/anonymus.svg';

  constructor(public router: Router) {
  }

  setImage(path: string) {
    this.previewImage = path
  }

  loadImage(value: any) {
    if(value) {
      const img = new File([value[0]], this.name + '_avatar');
      this.previewImage = URL.createObjectURL(img);
    }
  }
}
