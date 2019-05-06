import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Component({
  selector: 'app-my-repository',
  templateUrl: './my-repository.component.html',
  styleUrls: ['./my-repository.component.css'],
  providers: [HttpService]
})
export class MyRepositoryComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.myRepo();
    
  }

}
