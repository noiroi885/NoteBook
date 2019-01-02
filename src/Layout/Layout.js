import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation';
import Notelist from '../components/notelist/notelist';
import {Route} from 'react-router-dom';
import './layout.css'

class Layout extends Component {
  state = {
      notes: [],
      showEdit: false,
      editInput: "",
      editTitle: "",
      editKey: ""
    };

    
handleSubmit = (e) => {
  if (this._inputField.value !== '') {
    var note = {
      input: this._inputField.value,
      date: this._dateField.value,
      title: this._titleField.value,
      key: Date.now()
      };

    this.setState((prevState) => {
      return {
        notes: prevState.notes.concat(note)
      };
    })
  }

  this._dateField.value = ''
  this._inputField.value = ''
  this._titleField.value = ''

  console.log(this.state.notes)
  e.preventDefault();
    
  }

  deleteNote = (e) => {
    console.log(e.target.id)
    let index = e.target.id
    let currentNotes = this.state.notes
    for (let x =0; x<currentNotes.length; x++) {
      if (currentNotes[x].key == index) {
        currentNotes.splice(x,1)
      }
      this.setState({
        notes: currentNotes
      })
    }
  }

  handleClear =(e) => {
    this._dateField.value = ''
    this._inputField.value = ''
    this._titleField.value = ''

    e.preventDefault()
  }

  handleEdit = (e) => {
    let currentNotes= this.state.notes
    let index = e.target.id
    let y = ""
    let z = ""
    for (let x =0; x<currentNotes.length; x++) {
      if (currentNotes[x].key == index) {
        y = currentNotes[x].input
        z = currentNotes[x].title
      }
      this.setState({
        showEdit: true,
        editInput: y,
        editTitle: z,
        editKey: e.target.id
      })
    } 
  }

  handleTitle = (e) => {
    this.setState({
      editTitle: e.target.value
    })
  }

  handleChange = (e) => {
    this.setState({
      editInput: e.target.value
    })
  }

  saveEdit = () => {
    let index = this.state.editKey
    let currentNotes= this.state.notes
    let editedNote = this.state.editInput
    let editTitle = this.state.editTitle
    for (let x =0; x<currentNotes.length; x++) {
      if (currentNotes[x].key == index) {
        currentNotes[x].input = editedNote
        currentNotes[x].title = editTitle
      }
      this.setState({
        notes: currentNotes,
        showEdit: false
      })
    }
    console.log(this.state.editInput)
    console.log(editedNote)
    console.log(index)
    console.log(this.state.notes)
  }


  closeEdit = () => {
    this.setState({
      showEdit: false
    })
  }

  
  render() {
    return (
      <div className={'Layout'}>
          <Navigation />
          <Route path="/newnote" render={() => {
                    return (
                        <form className={'NewNote'}>
                          <section className={'Index'}>
                              <label>Title: </label><input className={'Title'} ref={e => this._titleField = e} />
                              <label>Date: </label><input type="date" className={'Date'} ref={e =>this._dateField = e} />
                          </section>
                                    
                          <textarea className={'Text'}
                              ref={e=> this._inputField = e}
                              rows="15"/>
                          <br/>
                          <div className={"Btns"}>
                            <button className={"Button"} onClick={this.handleSubmit}>Save</button>
                            <button className={"Button"} onClick={this.handleClear}>Clear</button>
                          </div>
                       </form> )}} />
        <Route exact path='/notes' render={() => <Notelist
                                              openEdit={this.handleEdit}
                                              deleteNote={this.deleteNote}
                                              notes={this.state.notes}
                                              show={this.state.showEdit}
                                              editInput={this.state.editInput}
                                              handleChange={this.handleChange}
                                              saveEdit={this.saveEdit}
                                              closeEdit={this.closeEdit}
                                              handleTitle={this.handleTitle}
                                              editTitle={this.state.editTitle}
                                              />} />
      </div>
    );
  }
}

export default Layout;