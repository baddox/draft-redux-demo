import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState } from "recompose";
// import "./DraftEditor.scss";

const bem = makeBem("DraftEditor");

const DraftEditor = ({ text, setText }) => {
  return (
    <div className={classnames(bem())}>
      <textarea value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

DraftEditor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired
};

DraftEditor.defaultProps = {};

export default DraftEditor;

export const DraftEditorStateful = withState("text", "setText", "")(
  DraftEditor
);
