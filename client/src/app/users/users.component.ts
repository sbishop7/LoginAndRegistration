import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./user"
import { UserService } from "./user.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = new User();
  confirmPW: string;
  returning_user: any = {email: "", password: ""}

  constructor( private _user_service: UserService, private _router: Router ) { }

  ngOnInit() {
  }

  login(){
    this._user_service.login(this.returning_user)
        .then(() => {this._router.navigate(["/users"])})
        .catch((err) => console.log("Login unsuccessful...", err))
  }

  register(){
    if(this.user.password == this.confirmPW){
      this._user_service.register(this.user)
        .catch((err) => console.log("Registration error... ", err))
        .then(() => {this._router.navigate(["/users"])})
    }else{
      console.log("password doesn't match")
    }
    
  }
}
