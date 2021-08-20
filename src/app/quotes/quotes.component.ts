import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),
    new Quote('Jackson','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos doloribus molestiae neque veniam.','john',new Date(2021,8,14)),

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
    
  constructor() { }

  ngOnInit(): void {
  }

}
