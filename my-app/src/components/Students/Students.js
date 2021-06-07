import React, {Component} from 'react';


class Students extends Component {
    goToHome=()=>{
        this.props.history.push({pathname:'/'})
    }
    render() {
        return(
        <div>
            <h1>Students Component</h1>
            <button onClick={this.goToHome}>Go Home</button>
        </div>
    );
}
    }
    export default Students;