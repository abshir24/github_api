import { Component } from '@angular/core';
import { NewService } from 'app/new.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  obj = {username:""}
  user = {}
  constructor(private _service:NewService){}
  
  runApi(){
    this._service.retrieveInfo(this.obj.username,(user)=>{
      console.log(user)
      this.user = user
    })
    this.obj = {username:""}
  }
}
