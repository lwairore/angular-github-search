import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';
import { Users } from '../classes/users';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
  providers: [HttpService]
})
export class MyDetailsComponent implements OnInit {
  myInfo:Users
  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.myDetails();
    this.myInfo = this.httpService.myInfo;
  }

}
