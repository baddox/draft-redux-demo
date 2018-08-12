import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { connect } from "react-redux";
// import "./TopBarDraftStatus.scss";

const bem = makeBem("TopBarDraftStatus");

const TopBarDraftStatus = ({ saved, status }) => {
  return (
    <div className={classnames(bem())}>
      {saved ? (
        <div style={{ color: "green" }}>saved</div>
      ) : status === "requesting" ? (
        <div style={{ color: "goldenrod" }}>saving...</div>
      ) : (
        <div style={{ color: "red" }}>unsaved</div>
      )}
    </div>
  );
};

TopBarDraftStatus.propTypes = {
  saved: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

TopBarDraftStatus.defaultProps = {};

export default TopBarDraftStatus;

export const TopBarDraftStatusConnected = connect(({ draft }) => ({
  saved: draft.saved,
  status: draft.savedDraft.status,
}))(TopBarDraftStatus);
