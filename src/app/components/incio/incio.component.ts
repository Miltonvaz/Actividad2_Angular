import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, FooterComponent, CarruselComponent],
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IncioComponent {}
