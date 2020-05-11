import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    //Adding comm if there is an error
    componentDidCatch(error, info) {
        this.setState({hasError:true})
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Oops! Website broken.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary