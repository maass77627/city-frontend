//import update from 'immutability-helper';

export default function cityReducer(state = {username: '', cities: [], allcities: []}, action) { // whatever we return from reducer is the new state
    console.log(state)
    
    switch (action.type) {
        case 'FETCH_CITIES':
            return {...state, allcities: action.payload}
            case 'ADD_CITIES':
            return {...state, ...state.username.cities.push(action.payload)}
            // case 'FETCH_PICS':
            // return {update(obj, {b: {$apply: function(x) {return x * 2;}}});}
            case 'ADD_USERS':
            return {...state, username: action.payload}
            default:
                return state
    }

}