import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
//import uuid from 'uuid';
import Nav from './Components/nav';
import AllNotes from './Components/AllNotes';
import AddNote from './Components/AddNote';
import './App.css';



export default class App extends Component {
  nextId = 0;

  state = {
    notes: [{
      note: '',
      data: '',
    }
    ],
    note: '',
    data: '',
  }

  /*  componentDidMount = () => {
     this.setState({ note: this.state})
   }; 
*/
  /* 
    handleChange = addNote => {
      const newNote = {
        id: this.nextID++,
        note: addNote.note,
        data: addNote.data,
      };
      const newNotes = [...this.state.notes, newNote]
    }
   */
  /*   getNextId = () => {
      let copyList = [...this.state.notes];
      const nextId = copyList.pop().id + 2;
      return nextId;
    }; */

  render() {
    return (
      <Router>
        <div className="App">
          <div className="left-container">
            <Nav />
          </div>
          <div className="right-container">
            <AllNotes notes={this.state.notes} />
            {/* <AddNote handleInput={this.handleInput} handleSubmit={this.handleSubmit} namevalue={this.state.note} datavalue={this.state.data} /> */}
          </div>
        </div>
      </Router>
    );
  }
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    /*     this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); */
    event.preventDefault();
    //const nextId = this.getNextId();
    let noteObj = {
      note: this.state.note,
      data: this.state.data,

    }
    this.setState({
      notes: [...this.state.notes, noteObj],
    });

    this.setState({
      name: '', data: '',
    });
  }
}
