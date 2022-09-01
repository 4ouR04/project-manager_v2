import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  getUsers() {
    return this.httpClient.get('http://localhost:3002/users/all');
  }
  getUsersWP() {
    return this.httpClient.get('http://localhost:3002/users/notassigned');
  }
}
