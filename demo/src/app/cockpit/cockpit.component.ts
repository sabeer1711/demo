import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  serverElements=[{type:'server',name:'Testserver',content:'Just a server'}];
  newServerName =''
 //newServerContent = ''


 @ViewChild('serverContentInput',{static: true}) serverContentInput:ElementRef;
 onServerAdded(nameInput:HTMLInputElement){
   console.log(nameInput.value)
   this.serverCreated.emit({
     serverName:nameInput.value,
     serverContent:this.serverContentInput.nativeElement.value
   })
  }
  onblueprintAdded(){
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

}
