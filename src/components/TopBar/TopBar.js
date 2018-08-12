import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import { TopBarDraftStatusConnected } from "../TopBarDraftStatus/TopBarDraftStatus";
// import "./TopBar.scss";

const bem = makeBem("TopBar");

const TopBar = () => {
  return (
    <div className={classnames(bem())}>
      <h1>Draft Demo</h1>
      <TopBarDraftStatusConnected />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;
