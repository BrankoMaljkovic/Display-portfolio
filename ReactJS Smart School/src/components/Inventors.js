import React from "react";

export default class Inventors extends React.Component {
    render() {
        return (
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Born</th>
                        <th>Passed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.propInventors.map((inventor, i)=> {
                        console.log(inventor);
                        return (
                            <tr key={i}>
                                <td>{inventor.first}</td>
                                <td>{inventor.last}</td>
                                <td>{inventor.year}</td>
                                <td>{inventor.passed}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}