import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import TopBar from "../TopBar/TopBar";
import { DraftEditorConnected } from "../DraftEditor/DraftEditor";
import { PreviewConnected } from "../Preview/Preview";
// import "./HomePage.scss";

const bem = makeBem("HomePage");

const HomePage = () => {
  return (
    <div className={classnames(bem())}>
      <TopBar />
      <DraftEditorConnected />
      <PreviewConnected />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
