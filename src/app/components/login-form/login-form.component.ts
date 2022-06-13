import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  authorizedUsers: Array<Users> = [];
  encontrado!: Users;
  form!: FormGroup;
  isLoggedIn!: boolean;
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private snackBar: MatSnackBar,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers()
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getUsers(){
    this.usersService.getUsers().then(us => this.authorizedUsers=us)
                                .catch(err => console.log(err))
  }

  logIn() {
    if (!this.form.valid) {
      return
    } 
    const name = this.form.value.name;
    const password = this.form.value.password;

    const encontrado = this.authorizedUsers.filter(user => user.name==name && user.password==password)
  
      if(encontrado.length===1){
        const msjLogin = this.snackBar.open(`Esta seguro de ingresar como ${encontrado[0].permiso}`,'si',{duration: 5000});
        msjLogin.onAction().subscribe(()=>{
          sessionStorage.setItem('user', encontrado[0].permiso);
          this.isLoggedIn=true;
          this.router.navigate(['/dashboard']);
          setTimeout(() => {
            location.reload();
          }, 2000);
      })
      }else{
        this.isLoggedIn=false;
        this.snackBar.open(`Error: No existe el usuario ingresado`, 'close')
      }
    
  }
}