import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial7',
  templateUrl: './tutorial7.component.html',
  styleUrls: ['./tutorial7.component.css']
})
export class Tutorial7Component implements OnInit {

  constructor() { }

  public successClass = "text-success";
  public isDanger = true;
  public isSpecial = true;
  public hasError = true;
  public msgClasses = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial

  }

  ngOnInit() {
  }

}
