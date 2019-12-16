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
 onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
   this.serverElements.push({
    type:'blueprint',
     name:blueprintData.serverName,
     content:blueprintData.serverContent
   })
 }
 onChangefirst(){
   this.serverElements[0].name ='Changed';

 }
 onDestroyfirst(){
   this.serverElements.splice(0,1);
 }
 onIntervalFired(firedNumber:number){
   if(firedNumber % 2 === 0){
     this.evenNumbers.push(firedNumber)
   }else{
     this.oddNumbers.push(firedNumber)
   }
 }
// oddNumbers:number[]=[];
 //evenNumbers:number[]=[]

loadedFeature:string='receipe'
 onNavigate(feature:string){
  this.loadedFeature=feature;
 }
 numbers= [1,2,3,4,5,6];
 oddNumbers = [1,3,5];
 evenNumbers = [2,4];
 value=5;

 
}
