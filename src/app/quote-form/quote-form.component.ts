import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent {

  newQuote = new Quote(0,"","","");

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
      this.addQuote.emit(this.newQuote);
        }
  
    }
  
  

