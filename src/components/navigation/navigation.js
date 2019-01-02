import React from 'react';
import Navigationitem from '../navigation/navigationitems/navigationitem'
import {Link} from 'react-router-dom'

import './navigation.css'

const navigation = () => {
    return (
        <>
            <nav className={'Navigation'}>
                <Link to={`/newnote`}><Navigationitem>New Note</Navigationitem></Link>
                <Link exact to={`/notes`}><Navigationitem>Notes</Navigationitem></Link>
            </nav>
        </>
    )
}

export default navigation;
