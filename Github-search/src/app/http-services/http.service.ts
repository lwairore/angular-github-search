import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  myInfo: Users;


  constructor(public http:HttpClient) { 
    this.myInfo = new Users("","","",0,"","");

  }

  // Deals with myDetails primarily
  myDetails() {
    interface sortMyDetails{
      login: string;
      bio:string;
      avatar_url: string;
      repos_url: string;
      public_repos: number;
      name: string;
    }
    let promise = new Promise((resolve, reject)=> {
      this.http.get<sortMyDetails>(environment.myApiUrl)
    })


  }





}
