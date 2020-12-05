import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurancestatus',
  templateUrl: './insurancestatus.component.html',
  styleUrls: ['./insurancestatus.component.css']
})
export class InsurancestatusComponent implements OnInit {

  test: string ="test display";
  constructor() { }

  ngOnInit(): void {
  }

}
