import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState } from "recompose";
import { connect } from "react-redux";
import { setOpen } from "../../redux/preview";
// import "./Preview.scss";

const bem = makeBem("Preview");

const Preview = ({ open, setOpen, text }) => {
  return (
    <div className={classnames(bem())}>
      <div>
        {!open && <button onClick={() => setOpen(true)}>Preview</button>}
        {open && (
          <div>
            <div>Preview:</div>
            <div>{text}</div>
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
  text: PropTypes.string.isRequired,
};

Preview.defaultProps = {};

export default Preview;

export const PreviewStateful = withState("open", "setOpen", false)(Preview);

export const PreviewConnected = connect(
  ({ preview }) => ({ open: preview.open, text: preview.text }),
  { setOpen }
)(Preview);
