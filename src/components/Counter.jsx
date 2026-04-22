import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    resetCount = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div className="counter">
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>
                    Increment
                </button>
                <button className="reset" onClick={this.resetCount}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Counter;