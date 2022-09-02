import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) {}
  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
    return promise;
  }

  login(role: string) {
    this.loggedIn = true;
    if (role === 'Admin') {
      this.router.navigate(['/admin/dashboard']);
    } else if(role==='User'){
      this.router.navigate(['/user/dashboard'])
    } else {
      this.router.navigate(['/auth'])
    }
  }
  logout() {
    this.loggedIn = false;
  }
}
