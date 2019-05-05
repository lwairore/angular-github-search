import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [HttpService],
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
