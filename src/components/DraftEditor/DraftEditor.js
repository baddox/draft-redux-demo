import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState } from "recompose";
import { connect } from "react-redux";
import { setText } from "../../redux/draft";
// import "./DraftEditor.scss";

const bem = makeBem("DraftEditor");

const DraftEditor = ({ text, setText, disabled }) => {
  return (
    <div className={classnames(bem())}>
      <textarea
        disabled={disabled}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

DraftEditor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

DraftEditor.defaultProps = {};

export default DraftEditor;

export const DraftEditorStateful = withState("text", "setText", "")(
  DraftEditor
);

export const DraftEditorConnected = connect(
  ({ draft, preview }) => ({
    text: draft.text,
    disabled: preview.open,
  }),
  { setText }
)(DraftEditor);
