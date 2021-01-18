
 export function addPicRef(city) {
   console.log(city)

 return fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+ city.name +', '+ city.state +'&key=AIzaSyA3MMJZakFzMKdABH1GBP6XzJrbApF7o7s&inputtype=textquery&fields=name,photos')
     .then(response => response.json())
    .then(data => 
    
    data.candidates[0].photos[0].photo_reference
    )

      }
 
    export default addPicRef