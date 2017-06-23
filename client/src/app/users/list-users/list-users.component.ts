import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  all_users: Array<User>
  user = {first_name: "",id:''}

  constructor( private _UserService: UserService, private _router: Router) { }

  ngOnInit() {
    this.get_all_users();
    this._UserService.checkStatus().catch((err) => {
      console.log("Error.  Not logged in?")
      this._router.navigate(['/'])
    })
    .then((user) =>{
      if(user){
        this.user.first_name = user.first_name;
        this.user.id = user._id;
      }
    })
  }

  get_all_users(){
    this._UserService.all_users()
        .catch( err => { console.log("Error retrieving all users... ", err);})
        .then( data => { this.all_users = data })
  }

  logout(){
    this._UserService.logout()
                    .then(() => {
                      this._router.navigate(['/'])
                    })
                    .catch((err) => {
                      console.log(err)
                      this._router.navigate(['/'])
                    })
  }
}
