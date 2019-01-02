import React from 'react';

import './navigationitem.css'

const navigationitem = (props) => {
    return (
        <button className={'Btn'}>{props.children}</button>
    )
}

export default navigationitem;