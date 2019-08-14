import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 parentTxtValue:string;
 parentClick:Subject<void>= new Subject<void>();
 childTextBoxValue:string;
 onparentButtonClick(){
   this.parentClick.next();
 }
 updateInChildValue(event){
 this.childTextBoxValue = event;
 }
}
