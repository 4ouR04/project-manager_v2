import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Iuser{
  Email: string
  Password: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  onSignup(user: any) {
    return this.httpClient.post('http://localhost:3002/users/signup', user);
  }
  onLogin(user: Iuser) {
    return this.httpClient.post('http://localhost:3002/users/login/', user);
  }

 
  checkUser(token: string) {
    return this.httpClient.get('http://localhost:3002/users/check', {headers: new HttpHeaders({token})});
  } 

  getUsers() {
    return this.httpClient.get('http://localhost:3002/users/all');
  }
  getUsersWP() {
    return this.httpClient.get('http://localhost:3002/users/notassigned');
  }
}
