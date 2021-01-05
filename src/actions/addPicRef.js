// import fetchPic from '../actions/fetchPic'
//  const apikey = AIzaSyA3MMJZakFzMKdABH1GBP6XzJrbApF7o7s
    //  let cityname = city.name
    //  let state = city.state
 //let photo = ''
 export function addPicRef(city) {
//  return (dispatch) => {
 return fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+ city.name +', '+ city.state +'&key=AIzaSyA3MMJZakFzMKdABH1GBP6XzJrbApF7o7s&inputtype=textquery&fields=name,photos')
     .then(response => response.json())
    .then(data => 
    //     data.candidates[0].photos[0].photo_reference = photo,
    //    console.log(photo),
    //     fetchPic(photo, city))
    data.candidates[0].photos[0].photo_reference
    )

        //  .then(data => dispatch({   //GO INTO **reducer and take them this action object
        //     type: 'FETCH_PICREFS',
        //     payload: data
        // }))
        
        }
 
    export default addPicRef