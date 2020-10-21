import * as actions from './actionTypes';


export function bugAdded(description){
    return{
        type: actions.BUG_ADDED,
        payload: {
            description: "Bug1"
        }
    }
}

export function bugRemoved(bugid){
    return{
        
        type: actions.BUG_REMOVED,
        payload: {
            id: bugid
        }
    }    
}

export function bugResolved(bugid){
    return{
        type: actions.BUG_RESOLVED,
        payload: {
            id: bugid
        }
    }
}