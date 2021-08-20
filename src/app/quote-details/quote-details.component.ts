import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote!: Quote;
  numberOfLikes: number = 0;
  numberOfDisLikes: number = 0;


  likeButtonClick(){
    this.numberOfLikes++;

  }
  dislikeButtonClick(){
    this.numberOfDisLikes++;

  }



  constructor() { }

  ngOnInit(): void {
  }

}
