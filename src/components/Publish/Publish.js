import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { withState } from "recompose";
// import "./Publish.scss";

const bem = makeBem("Publish");

const Publish = ({ previewing, setPreviewing, text, publish }) => {
  return (
    <div className={classnames(bem())}>
      <div>
        {!previewing && (
          <button onClick={() => setPreviewing(true)}>Preview</button>
        )}
        {previewing && (
          <div>
            <div>Preview:</div>
            <div>{text}</div>
            <div>
              <button onClick={() => publish(text)}>Publish</button>
              <button onClick={() => setPreviewing(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Publish.propTypes = {
  previewing: PropTypes.bool.isRequired,
  setPreviewing: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  publish: PropTypes.func.isRequired
};

Publish.defaultProps = {
  text: "default text",
  publish: text => console.log("Published:", text)
};

export default Publish;

export const PublishStateful = withState("previewing", "setPreviewing", false)(
  Publish
);
