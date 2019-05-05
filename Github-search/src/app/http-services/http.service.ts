import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  myInfo: Users;


  constructor(public http:HttpClient) { }





}
