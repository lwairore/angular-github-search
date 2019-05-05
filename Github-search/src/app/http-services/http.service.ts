import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';
import { environment } from 'src/environments/environment';

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
      this.http.get<sortMyDetails>(environment.myApiUrl).toPromise().then(response=> {
      this.myInfo.userName = response.login;
      this.myInfo.briefDescription = response.bio;
      this.myInfo.image = response.avatar_url;
      this.myInfo.myReposUrl = response.repos_url;
      this.myInfo.myPublicRepos = response.public_repos;
      this.myInfo.fullName = response.name;
      },)
    })


  }





}
