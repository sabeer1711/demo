import { CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRoute,state:RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean {
        this.authService.isAuthenticated()
        .then(
            (authenticated:boolean) => {
                if (authenticated) {
                    return true
                }
            }
        )
    }

    constructor(private authService:AuthService){}
    
}