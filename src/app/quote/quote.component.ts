import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Victoria Beryl',
      "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
      'Franz Kafka',
      new Date(2021, 9, 11)
    ),
    new Quote(
      'Chris Mark',
      'A word after a word after a word is power.',
      'Margaret Atwood',
      new Date(2021, 9, 6)
    ),
  ];

  postNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.postedDate = new Date(quote.postedDate);
    this.quotes.push(quote);
  }

  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].quote}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upvote(i: number) {
    this.quotes[i].upvotes++;
  }
  downvote(i: number) {
    this.quotes[i].downvotes++;
  }

  preNum?: number;
  lastNum?: number;
  counter?: number;

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }

  constructor() {}

  ngOnInit(): void {}
}
