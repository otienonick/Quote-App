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
    
  constructor() { }

  ngOnInit(): void {
  }

}
