import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'FIFA 13',
      imageSrc: 'image 3.png',
      description: '',
    },
    {
      title: 'FIFA 12',
      imageSrc: 'image 4.png',
      description: '',
    },
    {
      title: 'FIFA 10',
      imageSrc: 'image 5.png',
      description: '',
    },
    {
      title: 'FIFA 09',
      imageSrc: 'image 6.png',
      description: '',
    }
  ];

  currentSlideIndex = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  private startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private stopSlideShow() {
    clearInterval(this.slideInterval);
  }
}
