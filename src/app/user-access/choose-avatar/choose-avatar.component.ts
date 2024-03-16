import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {

}
