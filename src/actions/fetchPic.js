
export function fetchPic(city, photo) {
    return (dispatch, props) => {
        var imgUrl = 'https://maps.googleapis.com/maps/api/place/photo?photoreference='+ photo +'&key=AIzaSyA3MMJZakFzMKdABH1GBP6XzJrbApF7o7s&maxwidth=150&maxheight=150'
        // console.log(city, photo, imgUrl, props)

        dispatch({  
                type: 'FETCH_PIC',
                payload: {imgUrl, cityId: city.id}
            })

}}

export default fetchPic
