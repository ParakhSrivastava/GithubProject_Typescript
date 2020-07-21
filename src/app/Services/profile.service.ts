import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //private username:string;
  private user:string;

  constructor(private http:HttpClient) 
  { 
  }
  
  // getProfileInfo()
  // {
  //   return this.http.get("https://api.github.com/search/users?q=" + this.username) ;
  // }

  getProfiles()
  {
    return this.http.get("https://api.github.com/search/users?q=" + this.user) ;
  }
  
  updateProfile(username:string)
  {
    this.user = username;
  }
}
