import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  servername ="testserver"
  serverCreated = false
  constructor() { 
   setTimeout(() =>{
     this.allowNewServer=true
   } ,2000);
  }

  ngOnInit() {
  }
//assignments
  username = "user1"


  serverStatus = "the server will not created";
  
  createserverStatus(){
    this.serverCreated=true
    return this.serverStatus="now will created the name is " + this.servername
  }
  Updateservername="first server"
  updatServername(event:Event){
    this.Updateservername =(<HTMLInputElement>event.target).value;
  }

}
