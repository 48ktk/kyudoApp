import React from "react";
import PropTypes from "prop-types";

const NameCell = (props) => {
  const name = props.name;

  return <td>{name}</td>;
};

NameCell.propTypes = {
  name: PropTypes.string,
};

export default NameCell;
