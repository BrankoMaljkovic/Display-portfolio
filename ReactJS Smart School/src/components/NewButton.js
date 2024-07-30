import React from "react";

export default class NewButton extends React.Component {
    handleClick = () => {
        console.log("handleClick");
        this.props.handleUpdateData("Text from NewButton Component");
    }

    render(){
        return(
            <div>
                <input type="button" 
                value="Update state"
                onClick={this.handleClick} />
                <h2>State value: {this.props.data}</h2>
            </div>
        );
    }
}