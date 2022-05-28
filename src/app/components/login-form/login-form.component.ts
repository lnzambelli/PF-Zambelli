import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!: FormGroup;
  isLoggedIn!: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router,private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logIn() {
    if (!this.form.valid) {
      return
    } 
    const name = this.form.value.name;
    const password = this.form.value.password;
    
    if (name=='admin'  || name=='user'){
      this.isLoggedIn=true;
      this.router.navigate(['/dashboard']);
      sessionStorage.setItem('user', name);
      this.snackBar.open(`Ingresando al sistema como ${name}`,'close')
    }else{
      this.isLoggedIn=false;
      this.snackBar.open(`Error: No existe el usuario ingresado`, 'close')
    }
    
  }

}
