import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'] 
})
export class MainComponent implements OnInit {
  ngOnInit() {
  
    window.addEventListener('scroll', this.onScroll);
  }


  onScroll = () => {
    const elements = document.querySelectorAll('.fifa96, .fifa2000, .fifa2016');
    const viewportHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < viewportHeight - 100) {
        element.classList.add('show');
      }
    });
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
