import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import TopBar from "../TopBar/TopBar";
import { DraftEditorConnected } from "../DraftEditor/DraftEditor";
import { PublishStateful, PublishConnected } from "../Publish/Publish";
// import "./HomePage.scss";

const bem = makeBem("HomePage");

const HomePage = () => {
  return (
    <div className={classnames(bem())}>
      <TopBar />
      <DraftEditorConnected />
      <PublishConnected />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
