

function fetchPicTwo(city, photo) {
    console.log(city, photo)
    return (dispatch, props) => {
        var imgUrl = 'https://maps.googleapis.com/maps/api/place/photo?photoreference='+ photo +'&key=AIzaSyA3MMJZakFzMKdABH1GBP6XzJrbApF7o7s&maxwidth=150&maxheight=150'


        dispatch({  
                type: 'FETCH_PICTWO',
                payload: {imgUrl, cityId: city.id}
            })
        }
    }

 export default fetchPicTwo