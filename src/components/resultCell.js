import React from "react";
import PropTypes from "prop-types";

const ResultCell = (props) => {
  const result = props.result;
  const order = props.order;
  const changeResult = props.changeResult;
  const resultMapping = { null: "", 0: "・", 1: "〇" };

  return (
    <td id={order} onClick={changeResult}>
      {resultMapping[result]}
    </td>
  );
};

ResultCell.propTypes = {
  result: PropTypes.number,
  order: PropTypes.number,
  changeResult: PropTypes.func,
};

export default ResultCell;
