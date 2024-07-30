import React from "react";

export default class Content extends React.Component {
    render() {
        console.log("Content ", this.props);
        return(
            <div>
                <p>Content component</p>
                <p>Content text: {this.props.content}</p>
                <p>Number value: {this.props.num}</p>
            </div>
        );
    }
}