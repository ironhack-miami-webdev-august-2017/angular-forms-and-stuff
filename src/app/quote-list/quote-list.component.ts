import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: any[] = [
      {
          id: 11,
          text: 'Most Trees Are Blue',
          author: 'Jaden Smith'
      },
      {
          id: 24,
          text: 'If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It',
          author: 'Jaden Smith'
      },
      {
          id: 37,
          text: 'How Can Mirrors Be Real If Our Eyes Aren\'t Real',
          author: 'Jaden Smith'
      },
      {
          id: 48,
          text: 'If you can’t handle me at my worst, then you sure as hell don\'t deserve me at my best!',
          author: 'Marilyn Monroe (?)'
      }
  ]

  constructor(
    private counterThang: CounterService
  ) { }

  ngOnInit() {
  }

  deleteQuote(quoteId) {
      let quoteIndex;

      this.quotes.forEach((oneQuote, index) => {
          if (oneQuote.id === quoteId) {
              quoteIndex = index;
          }
      });

      this.quotes.splice(quoteIndex, 1);

      // PRO WAY
      // this.quotes =
      //   this.quotes.filter(
      //     oneQuote => oneQuote.id !== quoteId
      //   );
  } // deleteQuote()

}
