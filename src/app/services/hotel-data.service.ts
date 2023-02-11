import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {

  constructor(private http:HttpClient) { }

  hotels(){
    return this.http.get('https://my-json-server.typicode.com/davidhmoon/30-object-repository/test')
  }
}


