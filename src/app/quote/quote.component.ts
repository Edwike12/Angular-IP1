import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, 'Dale Carnegie', 'Most of the important things in the world have been accomplished by people who kept on trying when their seemed to be no hope'),
    new Quote(2,'Maya Angelou','If you are always trying to be normal you will never know how amazing you can be'),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete, index){
      if (isComplete) {
        this. quotes.splice(index,1);
      }
    }

    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
        
  constructor() { }

  ngOnInit(): void {
  }

}
