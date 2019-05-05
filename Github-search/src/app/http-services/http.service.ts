import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  myInfo: Users;
  otherUsersInfo: Users


  constructor(public http:HttpClient) { 
    this.myInfo = new Users("","","",0,"","");
    this.otherUsersInfo = new Users("","","",0,"","");

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
      resolve()
      },error=>{
        this.myInfo.userName = "";
        this.myInfo.briefDescription = "";
        this.myInfo.image = "";
        this.myInfo.myReposUrl = "";
        this.myInfo.myPublicRepos = 0;
        this.myInfo.fullName = "";
        reject(error);
      })
    })
    return promise

  }

  // This function will be responsible for building an ApiKey based on the user input
  otherUsersDetails(j) {
    interface sortOtherUsersDetails{
      login: string;
      bio:string;
      avatar_url: string;
      repos_url: string;
      public_repos: number;
      name: string;
    }
    var userNameInput = j;
    let promise = new Promise((resolve, reject)=> {
      this.http.get<sortOtherUsersDetails>(`${environment.apiPartOneUrl}${userNameInput}${environment.apiPartThreeUrl}`).toPromise().then(response=> {
      this.otherUsersInfo.userName = response.login;
      this.otherUsersInfo.briefDescription = response.bio;
      this.otherUsersInfo.image = response.avatar_url;
      this.otherUsersInfo.myReposUrl = response.repos_url;
      this.otherUsersInfo.myPublicRepos = response.public_repos;
      this.otherUsersInfo.fullName = response.name;
      resolve()
      },error=>{
        this.otherUsersInfo.userName = "";
        this.otherUsersInfo.briefDescription = "";
        this.otherUsersInfo.image = "";
        this.otherUsersInfo.myReposUrl = "";
        this.otherUsersInfo.myPublicRepos = 0;
        this.otherUsersInfo.fullName = "";
        reject(error);
      })
    })
    return promise

  }

  // Deals with my Repo
  myRepo() {
    interface sortMyRepo {
      html_url: string;
      description: string;
      name: string;
      created_at: Date;
      updated_at: Date;
      homepage: string;
      license: any;
      forks: number;
    }


  }





}
