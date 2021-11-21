import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Quote:string[];


constructor(){
  this.Quote=['If you are always trying to be normal, you will never know how amazing you can be']
}
}
