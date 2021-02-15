

export default function cityReducer(state = {users: [], mycities: [], bucketlist: [], allcities: []}, action) { // whatever we return from reducer is the new state
     console.log(action.payload)
     console.log("in reducer")
    
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

                case 'FETCH_PICTWO':
                return  {
                    ...state,
                    mycities: state.mycities.map(city => {
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
        case 'ADD_USERS':
            return {...state, ...state.users.push(action.payload)}
            case 'ADD_BUCKETLIST':
                return {...state, ...state.bucketlist.push(action.payload)}
        default:
            return state
    }

}