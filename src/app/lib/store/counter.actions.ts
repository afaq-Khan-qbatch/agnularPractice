import {  Action } from '@ngrx/store';

export class ActionParent implements Action {
    type: any;
    payload: any
}

export class incrementCount implements ActionParent {
    type= 'Add';
    constructor(public payload: any) {}
}

export class updateCount implements ActionParent {
    type= 'Add_1';
    constructor(public payload: any) {}
}

export class decrementCount implements ActionParent {
    type= 'SUB_1';
    constructor(public payload: any) {}
}

export class setLogin implements ActionParent {
    type= 'setLogin';
    constructor(public payload: any) {}
}
