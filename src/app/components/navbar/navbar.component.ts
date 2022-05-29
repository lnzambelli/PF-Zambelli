import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeDashboard(){
      sessionStorage.removeItem('user')
      this.router.navigate(['dashboard'])
      location.reload()
  }

  goToLogin(){
    this.router.navigate(['login'])
  }

}
