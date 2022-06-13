import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (!(sessionStorage.getItem('user')=='user' )) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
  
}
