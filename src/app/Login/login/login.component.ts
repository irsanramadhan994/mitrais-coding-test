import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hide = true;
  constructor(
    public router:Router
  ) { 


  }

  login(){
    console.log(this.email.value)
    console.log(this.password.value)

  }

  goToRegistration(){
    this.router.navigate([''])
  }


  getErrorEmail() {

    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorPassword() {

    return this.password.hasError('required') ? 'You must enter a value' :
            '';
  }

  ngOnInit() {
    
  }


  

}

export default LoginComponent
