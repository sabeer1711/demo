import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { interval,Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private router:Router,private authService:AuthService) { }
  private firstObsSubscription: Subscription;
  ngOnInit() {

   this.firstObsSubscription =interval(period: 1000).subscribe(
        next: count => {
          console.log(count)
        });

  }
  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }
 /* onLoadServers(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:'1'}, fragment: 'loading'});
  }
  onLogin(){
    this.authService.login();

  }
  onLogout(){
    this.authService.logout();
  }*/
}
