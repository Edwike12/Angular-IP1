import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Quote: string[];


constructor() { 
  this.Quote=['Watch finding Nemo','Buy Cookies','Get new Phone Case','Get Dog Food','Solve math homework','Plot my world domination plan']
  
}

ngOnInit() {
}

}
