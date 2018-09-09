import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: Http) { }

getEntries() {
  return this.http.get(`${environment.BASE_URL}/api/entries`)
    .pipe(map((res) => res.json()));
}

get(entryId) {
  return this.http.get(`${environment.BASE_URL}/api/entries/${entryId}`)
  .pipe(map((res) => res.json()));
}

post(form){
  return this.http.post(`${environment.BASE_URL}/api/entries`, form);
}

editEntry(entry) {
  return this.http.put(`${environment.BASE_URL}/api/user/${entry._id}`, entry)
    .pipe(map((res) => res.json()));
}

removeEntry(entryId) {
  return this.http.delete(`${environment.BASE_URL}/api/user/${entryId}`)
    .pipe(map((res) => res.json()));
}
}