import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `
    <div class="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        class="search-input"
      />
      <button class="search-button">Buscar</button>
    </div>
  `,
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {}
