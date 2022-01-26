import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-data';
  appName = 'This is one-way data binding example';
  
  header1 = 'Number Interpolation';

  // numeric binding
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Shanine";

  //style binding
  appliedCSSClass = "green";
  notappliedCSSClass = true;
  myColor = 'red';

  //Two-way data binding

  showData($event:any){
    console.log("Button is Clicked!");

  }

  //Keyup Function
  getData(data:any){
    console.warn(data)
  }

}
