import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link> {/*This is using client side routing*/}
        {/*404 - <a href="/">Go home</a>*/ /*This still causes a full page refresh, this is server side routing*/}
    </div>
)

export default NotFoundPage