import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState, compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { setText, saveDraft, getSavedDraft } from "../../redux/draft";
// import "./DraftEditor.scss";

const bem = makeBem("DraftEditor");

const DraftEditor = ({ text, setText, disabled, saveDraft }) => {
  return (
    <div className={classnames(bem())}>
      <textarea
        disabled={disabled}
        rows={5}
        placeholder="Type your draft here"
        style={{
          height: "auto",
          width: "50%",
          backgroundColor: disabled ? "#eee" : "transparent",
        }}
        value={text}
        onChange={e => {
          const t = e.target.value;
          setText(t);
          saveDraft(t);
        }}
      />
    </div>
  );
};

DraftEditor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  saveDraft: PropTypes.func.isRequired,
  getSavedDraft: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

DraftEditor.defaultProps = {};

export default DraftEditor;

export const DraftEditorStateful = withState("text", "setText", "")(
  DraftEditor
);

export const DraftEditorConnected = compose(
  connect(
    ({ draft, preview }) => ({
      text: draft.text,
      savedDraft: draft.savedDraft,
      disabled: preview.open,
    }),
    { setText, saveDraft, getSavedDraft }
  )
  // TODO: figure out best way to load the initial draft from localstorage.
  // lifecycle({
  //   componentDidMount() {
  //     this.props.getSavedDraft();
  //   },
  // })
)(DraftEditor);
