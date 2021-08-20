import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Steve Jobs',' “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ','Nick',new Date(2021,7,20)),
    new Quote('Babe Ruth','“Never let the fear of striking out keep you from playing the game.”.','Daren',new Date(2021,8,14)),
    new Quote('Will Smith ','“Money and success don’t change people; they merely amplify what is already there.”','Violet',new Date(2021,5,14)),
    new Quote('Henry Ford',' “The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”','Quintar',new Date(2020,11,14)),
    new Quote('Leo Burbett','“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”','Jane',new Date(2021,5,4)),
    new Quote('Hillary Clinton',' “Do all the good you can, for all the people you can, in all the ways you can, as long as you can.”','Joshua',new Date(2019,8,14)),

  ];
    toggleDetails(index: number){
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }
    deleteQuote(isComplete: boolean, index: number){
      if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)
    
      if (toDelete) {
        alert(`${this.quotes[index].author}'s quote has been successfully deleted`)
        this.quotes.splice(index,1);
       }
     }
    }
    // addNewQuote(quote: Quote){
    //   let quoteLength = this.quotes.length;
    //   // quote.author = quoteLength+1;
    //   quote.completeDate = new Date(quote.completeDate)
    //   this.quotes.push(quote)
    // }
    
    
  constructor() { }

  ngOnInit(): void {
  }

}
