import React from 'react';

import Backdrop from '../Backdrop/Backdrop'
import './Modal.css';

const Modal = (props) => {
    return (
        <>
            <Backdrop 
                show={props.show}
                closeEdit={props.closeEdit}/>
            <div className={"Modal"} style={{   transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                                opacity: props.show ? '1' : '0'}}>
                <input className={"Title"} onChange={props.handleTitle} value={props.editTitle}/>
                <textarea onChange={props.handleChange} className={"Note"} value={props.editInput}/>
                <div className={"Btns"}>
                    <button className={"Button"} onClick={props.saveEdit}>Save</button>
                    <button className={"Button"} onClick={props.closeEdit}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Modal;