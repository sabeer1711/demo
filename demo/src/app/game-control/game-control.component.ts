import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
 @Output() intervalFired = new EventEmitter<number>();
  lastNumber=0;
  constructor() { }

  ngOnInit() {
  }
  
  OnStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }
  OnPauseGame(){
  clearInterval(this.interval)    
  }
}
