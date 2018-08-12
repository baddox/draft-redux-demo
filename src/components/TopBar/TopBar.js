import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import TopBarDraftStatus from "../TopBarDraftStatus/TopBarDraftStatus";
// import "./TopBar.scss";

const bem = makeBem("TopBar");

const TopBar = () => {
  return (
    <div className={classnames(bem())}>
      <h1>Draft Demo</h1>
      <TopBarDraftStatus />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;
