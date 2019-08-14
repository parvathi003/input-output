import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('parentText')parentTextBoxValue:string;
@Input() parentClick: Subject<void>;
@Output('onTextFromChild') passToParent: EventEmitter<string>= new EventEmitter<string>();
clickCount= 0;
childTextBoxValue:string;
  constructor() { }

  ngOnInit() {
 this.parentClick.subscribe(()=> this.incrementValue());
  }


incrementValue(){
  this.clickCount= this.clickCount+1;
}
passTextValueToParent(){
  this.passToParent.emit(this.childTextBoxValue);
}
}