import classnames from "classnames";
import React from "react";

export default class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      note,
      octave,
      currentNote,
      handleMouseUp,
      handleMouseDown
    } = this.props;

    const classes = classnames({
      keyButton: true,
      pressed: note === currentNote,
      black: note.lenght === 2,
      white: note.lenght === 1
    });

    return (
      <div
        className={classes}
        id={note}
        onMouseDown={() => handleMouseDown(note, octave)}
        onMouseUp={handleMouseUp}
      >
        {note}
      </div>
    );
  }
}
