import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);
  first_name = new FormControl('', [Validators.required]);

  hide = true;
  constructor(
    public router:Router,
    public http:HttpClient,
  ) { 


  }

  login(){
    let body = {
      first_name:this.first_name.value,
      email:this.email.value
    }

    this.fetch(body).subscribe(
      res=>{
        console.log(res)
      }
    )
   

  }

  fetch(body){
    return this.http.post("http://localhost:3200/api/user/login", body);
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

    return this.first_name.hasError('required') ? 'You must enter a value' :
            '';
  }

  ngOnInit() {
    
  }


  

}

export default LoginComponent
