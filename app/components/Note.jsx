import React from 'react';

export default class Note extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  render () {
    const editing = this.state.editing;

    return (
      <div>
        {editing ? this._renderEdit() : this._renderTask()}
      </div>
    )
  }
  _renderEdit = () => {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this._finishEdit}
      onKeyPress={this._checkEnter} />
  }
  _renderTask = () => {
    const onDelete = this.props.onDelete;
    return <div onClick={this._edit}>
      <span className="task">{this.props.task}</span>
      {onDelete ? this._renderDelete() : null}
    </div>
  }
  _renderDelete = () => {
    return <button className="delete" onClick={this.props.onDelete}>x</button>
  }
  _edit = () => {
    this.setState({
      editing: true
    });
  }
  _checkEnter = (event) => {
    if (event.key === 'Enter') {
      this._finishEdit(event);
    }
  }
  _finishEdit = (event) => {
    this.props.onEdit(event.target.value);
    this.setState({
      editing: false
    });
  }
}
