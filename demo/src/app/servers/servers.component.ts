import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() { 
   setTimeout(() =>{
     this.allowNewServer=true
   } ,2000);
  }

  ngOnInit() {
  }

  serverStatus = "the server will not created";
  
  createserverStatus(){
    return this.serverStatus="now will created"
  }
  Updateservername="first server"
  updatServername(event:Event){
    this.Updateservername =(<HTMLInputElement>event.target).value;
  }

}
