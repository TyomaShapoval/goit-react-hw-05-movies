import Header from "../Header/Header";
import React from 'react';

const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            <h1 style={{
        textAlign: "center",
        marginTop: 50
      }}>Not Found</h1>
        </React.Fragment>
    )
}

export default NotFound;