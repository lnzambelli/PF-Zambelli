import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../core/models/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor() { 
  }

  getUsers(): Promise<Users[]>{
    return new Promise((resolve, reject) => {
        resolve([
          { name: 'Nicolas', password: '12345678', permiso: 'admin' },
          { name: 'Frank', password: '30bbbbbb', permiso: 'user' },
          { name: 'Ryan', password: '30111111', permiso: 'admin' }
        ])
        reject("no se enviaron los usuarios")
    })
  }

}
