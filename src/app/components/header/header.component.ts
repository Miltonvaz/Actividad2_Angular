import { Component } from '@angular/core';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerMenuComponent,SearchBarComponent,RouterLink], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onOptionSelected(option: string) {
    if (option === 'Curiosidades') {
      this.router.navigate(['/curiosidades']);
    } else if (option === 'Home') {
      this.router.navigate(['/home']);
    }
  }
}
