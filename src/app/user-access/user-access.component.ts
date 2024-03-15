import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-access',
  standalone: true,
  imports: [RouterOutlet, NgStyle],
  templateUrl: './user-access.component.html',
  styleUrl: './user-access.component.scss'
})
export class UserAccessComponent {

}
