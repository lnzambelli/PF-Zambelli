import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (!(sessionStorage.getItem('user')=='admin')) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
  
}
