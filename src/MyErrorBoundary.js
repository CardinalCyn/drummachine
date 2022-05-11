
import React, { Component } from 'react'

class MyErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError){
        return <h1>smth went wrong</h1>
    }
    return this.props.children
  }
}

export default MyErrorBoundary