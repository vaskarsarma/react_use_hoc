import React, { Component } from 'react';
import classes from "./Person.css";
import WithClasses from '../../../hoc/WithClasses';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.JS] - inside constructor');
    }

    componentWillMount() {
        console.log('[Person.JS] - inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.JS] - inside componentDidMount');
    }

    render() {
        console.log('[Person.JS] - inside render');
        return (
            <WithClasses Class={classes.Person}>
                <h2 onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!!!</h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
                {/* <h2>My name is Vaskar Sarma and I am {Math.floor(Math.random() * 30)} years old.</h2> */}
            </WithClasses>
        );
    }
}

export default Person;