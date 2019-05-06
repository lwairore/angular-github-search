import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Component({
  selector: 'app-other-users-repository',
  templateUrl: './other-users-repository.component.html',
  styleUrls: ['./other-users-repository.component.css'],
  providers: [HttpService]
})
export class OtherUsersRepositoryComponent implements OnInit {
  userNameInput:string;
  constructor(public httpService: HttpService) { }

  onSubmit(k) {
    alert(this.userNameInput)
    this.httpService.otherUsersRepo(this.userNameInput);
    
  }
  ngOnInit() {
  }


}
