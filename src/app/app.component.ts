import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('myCarousel', { static: false })
  myCarousel!: any;

  title = 'Single Page Portfolio';
  slides:number; 

  constructor(){
    this.slides = (window.innerWidth > 575)? 3 : 1;
  }

  next(){
    this.myCarousel.next();
  }

  prev(){
    this.myCarousel.prev();
  }
}
