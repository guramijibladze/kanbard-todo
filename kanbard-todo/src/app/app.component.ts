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
  taskName: string[] = [];

  addInfromation(){
    this.condition = false;
    this.formVisible =true;
    this.kanbard = true;
  }

  addFunction(taskname:string){
    this.taskName.push(taskname);
    
    console.log(this.taskName)
    taskname = "";
    // this.condition = true;
    // this.condition = true;
  }
}
