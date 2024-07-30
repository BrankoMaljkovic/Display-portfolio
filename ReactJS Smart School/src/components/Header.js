import React from "react";

export default class Header extends React.Component {
    render(){
        console.log("Header ", this);
        return(
            <div>
                <h1>Header component</h1>
                <p>Header value: {this.props.headerProp}</p>
            </div>
        );
    }
}