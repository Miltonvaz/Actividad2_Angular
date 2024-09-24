import { Component } from '@angular/core';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerMenuComponent,SearchBarComponent], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
