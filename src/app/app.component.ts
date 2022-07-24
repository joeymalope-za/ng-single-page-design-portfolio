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
  slideSize:number = 375;

  constructor(){
    //the slider library isn't natively responsive 
    //So this code is fixes that 
    this.slides = (window.innerWidth > 1024)? 3 : 1;
    this.slideSize = (window.innerWidth > 1024)? 275 : 375;
  }

  next(){
    this.myCarousel.next();
  }

  prev(){
    this.myCarousel.prev();
  }
}
