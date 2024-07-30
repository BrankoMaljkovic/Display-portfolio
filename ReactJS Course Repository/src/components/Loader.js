import React from "react";
import { PacmanLoader } from "react-spinners";

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loader-container">
                <PacmanLoader
                    size={50}
                />
            </div>
        );
    }
}