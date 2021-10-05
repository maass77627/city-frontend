import {connect} from 'react-redux'
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'




export class App extends React.Component {

  state = {

    user:  {username: "", id: null}
  }

 
  
  render() {
  return (
     <AnimationWrapper>
    <div>

      
      
      
    </div>
    </AnimationWrapper>
  );
}
}

export default connect()(App);