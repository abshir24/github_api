import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewService {
  user ={}

  constructor(private _http:Http){ }

  retrieveInfo(name, callback){
    console.log("service")
    console.log(name)
    this._http.get("https://api.github.com/users/"+name)
    .subscribe((response)=>{
      this.user = response.json();   
      callback(this.user)
    })
  }

}