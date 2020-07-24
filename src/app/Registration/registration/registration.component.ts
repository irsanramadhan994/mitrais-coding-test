import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public http: HttpClient
  ) {}
  mobileError: boolean = false;
  login: boolean = false;
  date = new FormControl(new Date());
 format = 'yyyy-MM-dd';
 locale = 'en-US';
  isRegistered: boolean = false;
  FormRegistration = this.fb.group({
    mobileNumber: ["", [Validators.required]],
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    dateBirth: [""],
    gender: [""],
    email: ["", [Validators.required,Validators.email]],
  });

  FormControl = this.FormRegistration.controls;

  ngOnInit() {}

  fetch(body) {
    return this.http.post("http://localhost:3200/api/user/", body);
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }

  onChangeNumber(){
    let validMobile = this.FormControl.mobileNumber.value.substring(0, 3);
    if (
      validMobile.search("62") > -1 ||
      validMobile.search("08") > -1 ||
      validMobile.search("022") > -1
    ) {
      this.mobileError = false;
    } else {
      this.mobileError = true;
    }
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

    if (this.FormRegistration.status === "VALID" && this.mobileError == false) {
      let payload = {
        mobile_number: this.FormControl.mobileNumber.value,
        first_name: this.FormControl.firstName.value,
        last_name: this.FormControl.lastName.value,
        date_birth: this.FormControl.dateBirth.value !== ''? formatDate( this.FormControl.dateBirth.value, this.format, this.locale) : '',
        gender: this.FormControl.gender.value,
        email: this.FormControl.email.value,
      };

      this.fetch(payload).subscribe((res) => {
        console.log(res);
        this.isRegistered = true;
        document.getElementById("overlay").style.display = "block";
      });
    }
  }
}
