import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  nameUsers: string | null =""

  constructor() { }

  ngOnInit(): void {
    this.nameUsers = sessionStorage.getItem('user');
  }

}
