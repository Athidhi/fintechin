import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmailValidator, FormControl } from '@angular/forms';
import { FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Insurance } from '../model/insurance.model';

@Component({
  selector: 'app-insurancehomepage',
  templateUrl: './insurancehomepage.component.html',
  styleUrls: ['./insurancehomepage.component.css']
})
export class InsurancehomepageComponent implements OnInit {
  secondForm: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit(){
    this.secondForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'birthday': new FormControl(null, [Validators.required]),
      'male': new FormControl(null, [Validators.required]),
      'female': new FormControl(null, [Validators.required]),
      'other': new FormControl(null, [Validators.required]),
      'adr': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'zip': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'self': new FormControl(null, [Validators.required]),
      'spouse': new FormControl(null, [Validators.required]),
      'child': new FormControl(null, [Validators.required]),
      'otherstatus': new FormControl(null, [Validators.required]),
      'single': new FormControl(null, [Validators.required]),
      'married': new FormControl(null, [Validators.required]),
      'employed': new FormControl(null, [Validators.required]),
      'unemployed': new FormControl(null, [Validators.required]),
      'fulltimestudent': new FormControl(null, [Validators.required]),
      'employmentyes': new FormControl(null, [Validators.required]),
      'employmentno': new FormControl(null, [Validators.required]),
      'autoyes': new FormControl(null, [Validators.required]),
      'autono': new FormControl(null, [Validators.required]),
      'otheryes': new FormControl(null, [Validators.required]),
      'otherno': new FormControl(null, [Validators.required]),  
      'insurancecompany': new FormControl(null, [Validators.required]),  
    })
  }

  onSubmit() {
    let fname = this.secondForm.get('firstname').value;
    alert("Fname Entered :: " + fname)
    let lname = this.secondForm.get('lastname').value;
    alert("lname Entered :: " + lname)
    let birthday = this.secondForm.get('birthday').value;
    alert("birthday Entered :: " + birthday)
    let male = this.secondForm.get('male').value;
    alert("male Entered :: " + male)
    let female = this.secondForm.get('female').value;
    alert("female Entered :: " + female)
    let adr = this.secondForm.get('adr').value;
    alert("adr Entered :: " + adr)
    let city = this.secondForm.get('city').value;
    alert("city Entered :: " + city)
    let state = this.secondForm.get('state').value;
    alert("state Entered :: " + state)
    let zip = this.secondForm.get('zip').value;
    alert("zip Entered :: " + zip)
    let phone = this.secondForm.get('phone').value;
    alert("phone Entered :: " + phone)
    let self = this.secondForm.get('self').value;
    alert("self Entered :: " + self)
    let spouse = this.secondForm.get('spouse').value;
    alert("spouse Entered :: " + spouse)
    let otherstatus = this.secondForm.get('otherstatus').value;
    alert("Fname Entered :: " + otherstatus)
    let single = this.secondForm.get('single').value;
    alert("single Entered :: " + single)
    let married = this.secondForm.get('married').value;
    alert("married Entered :: " + married)
    let employed = this.secondForm.get('employed').value;
    alert("employed Entered :: " + employed)
    let unemployed = this.secondForm.get('unemployed').value;
    alert("unemployed Entered :: " + unemployed)
    let fulltimestudent = this.secondForm.get('fulltimestudent').value;
    alert("fulltimestudent Entered :: " + fulltimestudent)
    let employmentyes = this.secondForm.get('employmentyes').value;
    alert("employmentyes Entered :: " + employmentyes)
    let employmentno = this.secondForm.get('employmentno').value;
    alert("employmentno Entered :: " + employmentno)
    let autoyes = this.secondForm.get('autoyes').value;
    alert("autoyes Entered :: " + autoyes)
    let autono = this.secondForm.get('autono').value;
    alert("autono Entered :: " + autono)
    let otheryes = this.secondForm.get('otheryes').value;
    alert("otheryes Entered :: " + otheryes)
    let otherno = this.secondForm.get('otherno').value;
    alert("otherno Entered :: " + otherno)
    let insurancecompany = this.secondForm.get('insurancecompany').value;
    alert("insurancecompany Entered :: " + insurancecompany)
    this.router.navigate(['/insurancestatus']);
  }
  
}
