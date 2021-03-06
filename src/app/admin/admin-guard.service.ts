import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn) {
      return true;
    } else {
      this.auth.redirectUrl = state.url;
      this.router.navigate(['/adm/login']);
      return false;
    }
  }
} 