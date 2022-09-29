import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Page';

count=0;

number1=0;
number2=0;
result=0;


listofNumbers=[11,12,13,14,15];

listofNames=["Rahul","Rohit","Manoj"];

increment=()=>{
   this.count++;
}

decrement=()=>{
  this.count++;
}

}