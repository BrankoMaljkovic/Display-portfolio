import React from "react";

export default class TableRow extends React.Component {
    render(){
        console.log(this);
        return(
            <tr>
                <td>{this.props.personProp.id}</td>
                <td>{this.props.personProp.name}</td>
                <td>{this.props.personProp.age}</td>
            </tr>
        );
    };
}

{/* 
<tr>
    <td>Id: {person.id}</td>
    <td>Name: {person.name}</td>
    <td>Age: {person.age}</td>
</tr> 
*/}