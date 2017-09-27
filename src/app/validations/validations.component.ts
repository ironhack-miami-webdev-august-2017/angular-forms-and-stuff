import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css'],
  providers: [CounterService]
})
export class ValidationsComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private counterThang: CounterService
  ) { }

  ngOnInit() {
  }

  submitForm() {
      console.log('Submitted!');
      this.counterThang.increment();
  }

}
