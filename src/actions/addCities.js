






export const addCities = (data) => {
    console.log(data)
    return (dispatch) => {
        fetch('http://localhost:3003/cities',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
            body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => dispatch({   //GO INTO **reducer and take them this action object
      type: 'ADD_CITIES',
      payload: data
  }))
    


}
}