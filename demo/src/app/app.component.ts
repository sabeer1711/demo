import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [{type:'server',name:'testserver',content:'just a test'}];
 newServerName =''
newServerContent = ''
onServerAdded(serverData:{serverName:string,serverContent:string}){
   this.serverElements.push({
   type:'server',
   name:serverData.serverName,
   content:serverData.serverContent
     
 });
 }
 onblueprintadded(blueprintData:{serverName:string,serverContent:string}){
   this.serverElements.push({
    type:'blueprint',
     name:this.newServerName,
     content:this.newServerContent
   })
 }

 
}
