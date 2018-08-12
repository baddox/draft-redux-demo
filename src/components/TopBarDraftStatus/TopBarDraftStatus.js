import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { connect } from "react-redux";
// import "./TopBarDraftStatus.scss";

const bem = makeBem("TopBarDraftStatus");

const TopBarDraftStatus = ({ saved }) => {
  return (
    <div className={classnames(bem())}>
      {saved ? <div>saved</div> : <div>saving...</div>}
    </div>
  );
};

TopBarDraftStatus.propTypes = {
  draftStatus: PropTypes.string.isRequired
};

TopBarDraftStatus.defaultProps = { draftStatus: "saving" };

export default TopBarDraftStatus;

export const TopBarDraftStatusConnected = connect(({ draft }) => ({
  saved: draft.saved
}))(TopBarDraftStatus);
