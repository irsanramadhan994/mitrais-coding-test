import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  constructor(public fb: FormBuilder,
  public  router:Router) {}
  mobileError:boolean = false;
  login:boolean = false;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  isRegistered:boolean = false;
  FormRegistration = this.fb.group({
    mobileNumber: ["", [Validators.required]],
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    dateBirth: [new Date()],
    gender: [""],
    email: ["", [Validators.required]],
  });

  FormControl = this.FormRegistration.controls;

  ngOnInit() {}


  goToLogin(){
    this.router.navigate(['login'])
  }

  register() {
    this.login = true;
    console.log(this.FormRegistration);
    console.log(this.FormControl.email);
    let validMobile = this.FormControl.mobileNumber.value.substring(0, 3);
    console.log(validMobile.search("08"));
    if (
      validMobile.search("62") > -1 ||
      validMobile.search("08") > -1 ||
      validMobile.search("022") > -1
    ) {
      this.mobileError = false;
    } else {
      this.mobileError = true;
      
    }

    if(this.FormRegistration.status === 'VALID' && this.mobileError == false){
      this.isRegistered = true
      document.getElementById('overlay').style.display = 'block'

    } 
  }
}
