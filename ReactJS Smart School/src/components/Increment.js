import React from "react";

export default class Increment extends React.Component {
    constructor() {
        super();
        console.log("Metoda constructor - Increment");
    }

    componentDidMount() {
        console.log("Metoda componentDidMount - Increment");
    }

    componentWillUnmount() {
        //poziva se prilikom napustanja komponente (Reset)
    }

    componentDidUpdate() {
        //poziva se nakon rendera, ali kada se promeni state
        console.log("Metoda componentDidUpdate - Increment");
    }

    render() {
        console.log("Metoda render - Increment");
        return(
            <h3>Number: {this.props.propNumber}</h3>
        );
    }
}