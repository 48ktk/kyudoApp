import React from "react";
import PropTypes from "prop-types";

import MemoCell from "./memoCell";
import NameCell from "./nameCell";
import ResultCell from "./resultCell";
import TotalCell from "./totalCell";

const Row = (props) => {
  const result = props.result;
  const row = props.row;
  const name = props.name;
  const changeResult = props.changeResult;

  return (
    <tr>
      {result.map((value, index) => {
        if (index === 0 && row === 0) {
          return (
            <React.Fragment key={row * 20 + index}>
              <NameCell name={name}></NameCell>
              <ResultCell
                key={row * 20 + index}
                order={row * 20 + index}
                result={result[index]}
                changeResult={changeResult}
              ></ResultCell>
            </React.Fragment>
          );
        } else if (index === 0) {
          return (
            <React.Fragment key={row * 20 + index}>
              <MemoCell></MemoCell>
              <ResultCell
                key={row * 20 + index}
                order={row * 20 + index}
                result={result[index]}
                changeResult={changeResult}
              ></ResultCell>
            </React.Fragment>
          );
        } else if ((index + 1) % 20 === 0) {
          return (
            <React.Fragment key={row * 20 + index}>
              <ResultCell
                key={row * 20 + index}
                order={row * 20 + index}
                result={result[index]}
                changeResult={changeResult}
              ></ResultCell>
              <TotalCell result={result}></TotalCell>
            </React.Fragment>
          );
        } else {
          return (
            <ResultCell
              key={row * 20 + index}
              order={row * 20 + index}
              result={result[index]}
              changeResult={changeResult}
            ></ResultCell>
          );
        }
      })}
    </tr>
  );
};

Row.propTypes = {
  name: PropTypes.string,
  changeResult: PropTypes.func,
  row: PropTypes.number,
  result: PropTypes.array,
};
export default Row;
