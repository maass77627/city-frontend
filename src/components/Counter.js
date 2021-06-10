import React from 'react'

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            characters: 0,
            count: 0,
            
        }
    }

    handleChange = (event) => {
        this.setState({
            characters: event.target.value.length
        })
        
       }

       handleClick = (event) => {
           alert("Im clicked")
           let newState = this.state.characters  
            this.setState(previousState => {
      return {
        count: previousState.count + newState
        // count: newState
      }
      
    })
    console.log(this.state)
       }
      
      
       render() {

        return(
            <div>
                <input id="new" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Click Me</button> 
                 <p id="counter">{this.state.count}</p> 

                
            </div>
           
          
           
        )
        }

}

export default Counter; 