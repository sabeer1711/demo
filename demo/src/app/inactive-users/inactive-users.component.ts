import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  
   users: string  [];
  constructor(private usersService:UserService){

  }
ngOnInit(){
 this.users = this.usersService.inactiveUsers;
}
onSetToActive(id:number){
  this.usersService.setToActive(id)
}

}
