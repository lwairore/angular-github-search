import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Component({
  selector: 'app-other-users',
  templateUrl: './other-users.component.html',
  styleUrls: ['./other-users.component.css'],
  providers: [HttpService],
})
export class OtherUsersComponent implements OnInit {
  userNameInput:string;
  constructor(public httpService:HttpService) { }
  onSubmit(k) {
    this.httpService.otherUsersDetails(this.userNameInput);
  }
  ngOnInit() {
  }

}
