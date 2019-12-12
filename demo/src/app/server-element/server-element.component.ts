import { Component, OnInit, Input,ViewEncapsulation,OnChanges, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck{
 @Input('srvElement') element:{type:string,name:string ,content:string}
 @Input() name:string
  constructor() { 
    console.log('constructor worked')
  }

  ngOnInit() {
    console.log('ngOninit worked')
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ng on change wokrd")
    console.log(changes)
  }
  ngDoCheck(){

  }

}
