
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainComponent } from '../../components/main/main.component';
import { IncioComponent } from '../../components/incio/incio.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    MainComponent,
    IncioComponent
  ],
  imports: [
    CommonModule,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent
  ],
  exports: [
    MainComponent,
    IncioComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioModule {}
