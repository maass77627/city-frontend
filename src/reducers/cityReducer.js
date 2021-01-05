//import update from 'immutability-helper';

export default function cityReducer(state = {username: '', mycities: [{name: 'juno', state: 'alaska', description: 'cold', image: ''}], allcities: []}, action) { // whatever we return from reducer is the new state
    console.log(action.payload)
    
    switch (action.type) {
        case 'FETCH_PIC':
                return  {
                    ...state,
                    allcities: state.allcities.map(city => {
                        if (city.id === action.payload.cityId) {
                            return {
                                ...city, 
                                imgUrl: action.payload.imgUrl
                            } 
                        
                        } else {
                            return city
                        }
                    })

                } 
        case 'FETCH_CITIES':
            return {...state, allcities: action.payload}
        case 'ADD_CITIES':
            return {...state, ...state.mycities.push(action.payload)}
        // case 'FETCH_PIC':
        //         return {...state, allimages: action.payload}
        case 'ADD_USERS':
            return {...state, username: action.payload}
        default:
            return state
    }

}