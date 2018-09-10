import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: Http) { }


getUser(userId) {
  return this.http.get(`${environment.BASE_URL}/api/user/${userId}`)
    .pipe(map((res) => res.json()));
}

editUser(user) {
  return this.http.put(`${environment.BASE_URL}/api/user/${user._id}`, user)
    .pipe(map((res) => res.json()));
}

removeUser(userId) {
  return this.http.delete(`${environment.BASE_URL}/api/user/${userId}`)
    .pipe(map((res) => res.json()));
}
}