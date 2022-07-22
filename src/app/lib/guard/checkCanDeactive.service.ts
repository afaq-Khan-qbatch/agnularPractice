import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { SignUpComponent } from "src/app/pages/auth/sign-up/sign-up.component";
@Injectable()
export class CheckDeactivteServise implements CanDeactivate<SignUpComponent> {
    canDeactivate(component: SignUpComponent ): boolean {
        console.log(component.email, component.fname, component.lname , component.password)
        if(component.email || component.fname || component.lname || component.password) {
            return confirm('Are you sure you wants to clear this from');
        } else {
            return true;
        }
       
    }
}