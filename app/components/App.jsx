import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions.js';
import NoteStore from '../stores/NoteStore.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = NoteStore.getState();
  }

  componentDidMount () {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount () {
    NoteStore.unlisten(this.storeChanged);
  }

  stateChanged = (state) => {
    this.setState(state);
  }

  render () {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick={this._addNote}>+</button>
        <Notes items={notes} onEdit={this._editNote} onDelete={this._deleteNote}/>
      </div>
    )
  }

  _addNote = () => {
    NoteActions.create({task: 'New task'});
  }

  _deleteNote = (id) => {
    NoteActions.delete(id);
  }

  _editNote = (id, task) => {
    NoteActions.update({id, task});
  }
}
