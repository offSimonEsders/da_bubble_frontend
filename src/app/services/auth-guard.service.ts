import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private backendService: BackendService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<GuardResult> {
    const resp = await this.backendService.checkAuthToken();
    if(resp === true) {
      return true;
    }
    return this.router.navigate(['']);
  }  

}
