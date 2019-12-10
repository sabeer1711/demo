import { Component, OnInit,EventEmitter, Output } from '@angular/core';


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
 newServerContent = ''
 onServerAdded(serverData:{serverName:string,serverContent:string}){
   this.serverCreated.emit({
     serverName:this.newServerName,
     serverContent:this.newServerContent
   })
  }
  onblueprintadded(){
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }

}
