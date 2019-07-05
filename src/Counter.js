import React,{Component} from 'react';
import './Counter.css'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }
    }

    render(){
        return(
            <div className="div">
                <input type="button" value="Increment" onClick={this.increment} />
                <input type="button" value="Decrement" onClick={this.decrement} />
                <h2 className="h4">Count: {this.state.count}</h2>
            </div>
        );
    }
}

export default Counter;