import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState } from "recompose";
import { connect } from "react-redux";
import { setOpen } from "../../redux/preview";
// import "./Preview.scss";

const bem = makeBem("Preview");

const Preview = ({ open, setOpen, preview, draftSave }) => {
  return (
    <div className={classnames(bem())}>
      <div>
        {!open && <button onClick={() => setOpen(true)}>Preview</button>}
        {open && (
          <div>
            <div>Preview:</div>
            {draftSave.status === "requesting" ? (
              <div>saving draft...</div>
            ) : preview.status === "requesting" ? (
              <div>loading preview...</div>
            ) : preview.status === "success" ? (
              <div>{preview.data}</div>
            ) : (
              <div>{JSON.stringify(preview)}</div>
            )}
            <div>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Preview.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  preview: PropTypes.object.isRequired,
  draftSave: PropTypes.object.isRequired,
};

Preview.defaultProps = {};

export default Preview;

export const PreviewStateful = withState("open", "setOpen", false)(Preview);

export const PreviewConnected = connect(
  ({ preview, draft }) => ({
    open: preview.open,
    preview: preview.preview,
    draftSave: draft.draftSave,
  }),
  { setOpen }
)(Preview);
