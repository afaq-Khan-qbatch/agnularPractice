import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CartComponent } from "src/app/pages/cart/cart.component";

@Injectable()
export class checkActiveAuth implements CanActivate {
    constructor(public cart: CartComponent , private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // console.log('this.cart.count ==> ', this.cart.getCarts())
        const token: string = (localStorage.getItem('token') as string)
        console.log('storage ==> ', token)
        if(token?.length < 7 || token == null) return true;
        else {
            console.log('in else')
            this.router.navigate(['/']);
            return false
        }
    }
}