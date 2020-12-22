

export function fetchCities() {
    console.log('inside fetch cities')
     return (dispatch) => {
    fetch('http://localhost:3002/cities')
    .then(response => response.json())
    .then(data => dispatch({   //GO INTO **reducer and take them this action object
        type: 'FETCH_CITIES',
        payload: data
    }))
    
    }
}
export default fetchCities

 ///.then(data => console.log(data))

