import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';

import './notelist.css';

class Notelist extends Component {
    render () {
        const toggle = (e) => {
            var x = document.getElementById("hr"+e.target.id);
            var y = document.getElementById("p"+e.target.id)
            if (x.style.display === "none" && y.style.display === "none") {
                x.style.display = "block";
                y.style.display = "block"
            } else {
                x.style.display = "none";
                y.style.display = "none"
            }
            console.log(x.style.display)
        }


        const listele = (item) => {
            return (
                <li key={item.key} className={"Wrapper"}>
                    <div className={"NoteHeader"}>
                        <h3 id={item.key} onClick={toggle}>{item.date} | {item.title.length > 30 ? item.title.slice(0,30)+"..." : item.title}</h3>
                        <div className={"Buttons"}>
                            <button onClick={this.props.openEdit} id={item.key}>Edit</button>
                            <button onClick={this.props.deleteNote} id={item.key}>Delete</button>
                        </div>
                    </div>
                    <div className={"Note"}>
                        <hr id={"hr"+item.key} style={{display: "none"}}/>
                        <p id={"p"+item.key} style={{display: "none"}}>{item.input}</p>
                    </div>
                </li>
                )
            };

        var entries = this.props.notes
        var noteslisted = entries.map(listele)
        return (
            <div className={"Hoc"}>
                <Modal
                    show={this.props.show}
                    editInput={this.props.editInput}
                    handleChange={this.props.handleChange}
                    saveEdit={this.props.saveEdit}
                    closeEdit={this.props.closeEdit}
                    handleTitle={this.props.handleTitle}
                    editTitle={this.props.editTitle}
                    />
                <ul className={'NoteList'}>
                    {noteslisted}
                </ul>
            </div>
        )
    }
};

export default Notelist;
