






export const addCities = (data) => {
    console.log(data)
    return (dispatch) => {
        fetch('http://localhost:3002/cities',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
            body: JSON.stringify(data),
    })
    .then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
    


}
}