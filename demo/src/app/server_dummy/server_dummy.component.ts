import {Component} from '@angular/core';

@Component({
    selector:'app-server-dummy',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
            color:white;
        }      
         `   ]
})
export class ServerDummyComponent{

server="first";
serverId=10;
serverStatus:string = 'offline';
constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
}
    
status(){
    return this.serverStatus
    
}
getColor(){
   return this.serverStatus === 'online' ? 'green' : 'red';
}



}