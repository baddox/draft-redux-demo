import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
import TopBar from "../TopBar/TopBar";
import { DraftEditorStateful } from "../DraftEditor/DraftEditor";
import { PublishStateful } from "../Publish/Publish";
// import "./HomePage.scss";

const bem = makeBem("HomePage");

const HomePage = () => {
  return (
    <div className={classnames(bem())}>
      <TopBar />
      <DraftEditorStateful />
      <PublishStateful />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
