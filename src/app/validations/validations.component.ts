import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
      console.log('Submitted!');
  }

}
