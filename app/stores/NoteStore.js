import uuid from 'node-uuid';
import alt from '../libs/alt.js';
import NoteActions from '../actions/NoteActions.js'

class NoteStore {
  constructor () {
    this.bindActions(NoteActions);
    this.notes = [];
  }
  create (note) {
    const notes = this.notes;
    note.id = uuid.v4();

    this.setState({
      notes: [...notes, note]
    });
  }
  update ({id, task}) {
    const notes = this.notes;
    const noteIndex = this.findNote(id);
    if (noteIndex < 0) {
      return;
    }
    notes[noteIndex].task = task;
  }
  delete (id) {
    const notes = this.notes;
    const noteIndex = this.findNote(id);
    if (noteIndex < 0) {
      return;
    }
    this.setState({
      notes: [
        ...notes.slice(0, noteIndex),
        ...notes.slice(noteIndex + 1)
      ]
    });
  }
  findNote (id) {
    const notes = this.notes;
    const noteIndex = notes.findIndex((note) => {
      note.id === id;
    });
    if (noteIndex < 0) {
      console.warn('Failed to find a note', id, note);
    }

    return noteIndex;
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
