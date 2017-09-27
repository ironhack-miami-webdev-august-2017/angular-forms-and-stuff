import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  @Input() myQuote: any;

  // "deleteNotifier" is our "text messaging" object
  @Output() deleteNotifier = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notifyForDeletion() {
      // send the "text message" to the parent
      this.deleteNotifier.emit(this.myQuote.id);
  }

}
