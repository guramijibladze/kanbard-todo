import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  condition:boolean = true;
  formVisible:boolean = false;
  kanbard:boolean = false;

  addInfromation(){
    this.condition = false;
    this.formVisible =true;
    this.kanbard = true;
  }

  addFunction(){
    // this.condition = true;
    // this.condition = true;
  }
}
