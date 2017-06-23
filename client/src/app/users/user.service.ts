import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { User } from "./user"

import "rxjs"

@Injectable()
export class UserService {

  constructor( private _http: Http ) { }

login(user: User){
  return this._http.post("/login", user)
            .map( data => data.json() )
            .toPromise()
}

register(user: User){
  return this._http.post("/register", user).toPromise()
}

all_users(){
  return this._http.get( '/allusers' )
            .map( data => data.json() )
            .toPromise();
}

checkStatus(){
  return this._http.get('/checkstatus')
            .map( data => data.json() )
            .toPromise();
}

logout(){
  return this._http.get('/logout')
            .map( data => data.json() )
            .toPromise();
}
}
