import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-access',
  standalone: true,
  imports: [RouterOutlet, NgStyle, NgClass, NgIf],
  templateUrl: './user-access.component.html',
  styleUrl: './user-access.component.scss'
})
export class UserAccessComponent {
  @ViewChild('accessframe') accessframe?: ElementRef;
  @ViewChild('header') header?: ElementRef;
  centerContent: boolean = false;

  constructor(public router: Router) {
  }

  switchClass(element: HTMLElement, removeClass: string, addClass: string) {
    setTimeout(() => {
      element.classList.remove(removeClass);
      element.classList.add(addClass)
    }, 2000);
  }

}
