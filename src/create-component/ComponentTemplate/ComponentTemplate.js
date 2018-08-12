import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import makeBem from "../../utils/makeBem";
// import "./ComponentTemplate.scss";

const bem = makeBem("ComponentTemplate");

const ComponentTemplate = ({ children }) => {
  return <div className={classnames(bem())}>{children}</div>;
};

ComponentTemplate.propTypes = {
  children: PropTypes.node
};

ComponentTemplate.defaultProps = {};

export default ComponentTemplate;
