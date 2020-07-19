import React, { Component } from "react";
import "../menuItem/menuItem";
import "./directory.scss";
import MenuItem from "./../menuItem/menuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "./../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
