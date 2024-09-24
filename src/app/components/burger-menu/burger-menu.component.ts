import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'burger-menu',
  standalone: true,
  imports: [NgFor,NgIf],
  template: `
    <div class="burger-menu" [class.active]="active" (click)="onBurgerClicked()">
      <div class="burger-container">
        <div class="burger-inner"></div>
      </div>
      <ul class="options-list" *ngIf="active">
        <li *ngFor="let option of options" (click)="onOptionSelected(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  @Input() init?: boolean; // O puedes usar: @Input() init: boolean = false;
  @Input() options: string[] = [];
  @Output() opened = new EventEmitter<boolean>();
  @Output() optionSelected = new EventEmitter<string>();

  active = false;

  ngOnInit() {
    this.active = this.init ?? false; 
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit(this.active);
  }

  onOptionSelected(option: string) {
    this.optionSelected.emit(option);
    this.active = false;
  }
}
