import React from "react";

export default class Input extends React.Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    className={this.props.className} />
                <h3>{this.props.label}: {this.props.value}</h3>
            </div>
        );
    }
}