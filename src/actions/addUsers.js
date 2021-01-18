export const addUsers = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3002/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
            body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => dispatch({   //GO INTO **reducer and take them this action object
      type: 'ADD_USERS',
      payload: data
  }))
    }
}



