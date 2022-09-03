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
  constructor(private httpClient: HttpClient) { }

// User creates account
  onSignup(user: any) {
    return this.httpClient.post('http://localhost:3002/users/signup', user);
  }

// Authenticates to the dashboard
  onLogin(user: Iuser) {
    return this.httpClient.post('http://localhost:3002/users/login/', user);
  }

//  Check user role ,Admin or normal user for proper redirection
  checkUser(token: string) {
    return this.httpClient.get('http://localhost:3002/users/check', {headers: new HttpHeaders({token})});
  } 

// Get all the users
  getUsers(token: string) {
    return this.httpClient.get('http://localhost:3002/users/all', {
      headers: new HttpHeaders({ token }),
    });
  }

// Get all users without projects
  getUsersWP(token: string) {
    return this.httpClient.get('http://localhost:3002/users/notassigned', {
      headers: new HttpHeaders({ token }),
    });
  }
}

// Author: Amos Mwongela Gabriel
// Email:  amosmwongelah@gmail.com
// File:   user.service.ts
