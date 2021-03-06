// Higher Order Component (HOC) - A component (HOC) that renders another component
// Advantages of using HOC pattern:
// The purpose of a HOC is to reuse code
// Render hijacking
// Prop manipulation
// Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>
{
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }           
            {/* '...props' This has the effect of taking every key/value pair on that object (props) and passing them down as props*/}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>
{
    return (props) => (
        <div>
            { props.isAuthenticated ? 
                <WrappedComponent {...props}/> : 
                <p>Please login to view the info</p> 
            } 
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'))