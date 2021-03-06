import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
