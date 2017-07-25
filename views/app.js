import React from 'react';
import ReactDOM from "react-dom";

import Line from "./line";


class App extends React.Component {
    render() {
        return (
            <div>
                 < Line /> 
            </div>
        );
    }
}

ReactDOM.render(< App />, document.getElementById("app"));