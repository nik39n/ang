import React, {Component} from 'react';


class Groups extends Component {
    goToHome=()=>{
        this.props.history.push({pathname:'/'})
    }
    render() {
        return(
        <div>
            <h1>Groups Component</h1>
            <button onClick={this.goToHome}>Go Home</button>
        </div>
    );
}
    }
    export default Groups;