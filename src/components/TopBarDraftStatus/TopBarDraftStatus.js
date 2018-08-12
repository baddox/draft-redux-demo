import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
// import "./TopBarDraftStatus.scss";

const bem = makeBem("TopBarDraftStatus");

const TopBarDraftStatus = ({ draftStatus }) => {
  return (
    <div className={classnames(bem())}>
      {draftStatus === "saving" ? <div>saving...</div> : <div>saved</div>}
    </div>
  );
};

TopBarDraftStatus.propTypes = {
  draftStatus: PropTypes.string.isRequired
};

TopBarDraftStatus.defaultProps = { draftStatus: "saving" };

export default TopBarDraftStatus;
