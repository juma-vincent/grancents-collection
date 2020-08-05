import React from "react";
import "../menuItem/menuItem";
import MenuItem from "./../menuItem/menuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "./../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
