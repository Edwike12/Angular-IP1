import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Quote:Quote[]=[
  {id:'1',Quote:'If you are always trying to be normal you will never know how amazing you can be'},
  {id:'2',Quote:'Most of the important things in the world have been accomplished by people who kept on trying when their seemed to be no hope'}
];

}
