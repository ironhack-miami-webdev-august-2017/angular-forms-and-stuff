import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-ui',
  templateUrl: './count-ui.component.html',
  styleUrls: ['./count-ui.component.css']
})
export class CountUiComponent implements OnInit {

  constructor(
    private counterThang: CounterService
  ) { }

  ngOnInit() {
  }

}
