import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote("Victoria Beryl", "Injustice anywhere is a threat to justice everywhere.", "Martin Luther King", new Date(2021,9,11)),
    new Quote("Chris Mark", "In the end we all become stories.", "Paul Mark", new Date(2021,9,6)),
  ];


  postNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }

  toggleDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isComplete:boolean, index:number){
    // if (isComplete) {
    //   this.quotes.splice(index,1);
    // }

    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete) {
        this.quotes.splice(index,1);
      }
      
    }
  }

  // addQuote(chosenQuote) {
  //   this.quotes.push(chosenQuote)
  // }

  upvote(i:number) {
     this.quotes[i].upvotes ++;
   }
   downvote(i:number) {
     this.quotes[i].downvotes  ++;
   }
  // delQuote(i) {
  //   this.quotes.splice(i, 1)
  // }

  preNum?:number;
  lastNum?:number;
  counter?:number;

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}