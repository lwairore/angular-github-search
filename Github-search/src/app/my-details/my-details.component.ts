import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
  providers: [HttpService]
})
export class MyDetailsComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.myDetails();
    
  }

}
