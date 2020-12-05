import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmailValidator, FormControl } from '@angular/forms';
import { FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'fintechinsurance';
  myForm: FormGroup;

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.myForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }
  
  onSubmit() {
    let email = this.myForm.get('Email').value;
    alert("Email Entered :: " + email)
    let password = this.myForm.get('password').value;
    alert("Password Entered :: " + password)
  
    if (email === 'abc' && password === 'abc') {
      this.router.navigate(['/insurancehomepage']);
    }
  }

}


