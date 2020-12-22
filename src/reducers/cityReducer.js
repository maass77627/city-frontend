export default function cityReducer(state = {cities: []}, action) { // whatever we return from reducer is the new state

    switch (action.type) {
        case 'FETCH_CITIES':
            return {cities: action.payload}
            default:
                return state
    }

}