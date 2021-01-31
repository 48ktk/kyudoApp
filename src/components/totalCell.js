import React from "react";
import PropTypes from "prop-types";

const TotalCell = (props) => {
  const result = props.result;
  let total = result.reduce((sum, element) => sum + element, 0);
  if (total == 20) {
    total = "皆中";
  }

  return <th className={"player-score"}>{total}</th>;
};

TotalCell.propTypes = {
  result: PropTypes.array,
};

export default TotalCell;
