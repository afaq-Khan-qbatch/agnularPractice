import { ActionParent } from './counter.actions';

const initialState: number = 0
const isLogin: number = 0


export function counterReducer (state = initialState, action: ActionParent | any) {
    switch(action.type) {
        case 'Add': {
            state = 0;
            return state = action.payload;
        }
        case 'Add_1': {
            return state =  state + action.payload;
        }
        case 'SUB_1': {
            return state =  state - action.payload;
        }
        default: return state;
    }
}

export function setLogin (state = isLogin, action: ActionParent | any) {
    switch(action.type) {
        case 'setLogin': {
            return state =  action.payload;
        }
        default: return state;
    }
}