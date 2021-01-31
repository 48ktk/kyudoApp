import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Row from "../components/Row";

const Table = (props) => {
  const data = props.data;
  let initResult = [];
  const name = data.name;

  // データが存在しない場合1行分作成
  if (!data.data.length) {
    initResult.push(Array(20).fill(null));
  } else {
    initResult = data.data[0].result;
  }

  const [result, setResult] = useState(initResult);

  useEffect(() => {
    if (result.length % 20 !== 0) {
      let tmpArray = JSON.parse(JSON.stringify(result));
      tmpArray = tmpArray.concat(Array(20 - (result.length % 20)).fill(null));
      setResult(tmpArray);
    }
  });

  /**
   * 的中変更関数
   * @param {*} e
   */
  const changeResult = (e) => {
    // 何射目か
    const order = parseInt(e.target.id.replace(/[^0-9]/g, ""));
    const value = result[order];
    let tmpArray = JSON.parse(JSON.stringify(result));
    if (value == null) {
      tmpArray[order] = 1;
    } else if (value === 0) {
      tmpArray[order] = null;
    } else if (value === 1) {
      tmpArray[order] = 0;
    }
    setResult(tmpArray);
  };

  /**
   * 1行追加関数
   */
  const addRow = () => {
    console.log("+++++ add clicked");
    let tmpArray = JSON.parse(JSON.stringify(result));
    tmpArray = tmpArray.concat(Array(20).fill(null));
    setResult(tmpArray);
  };
  function saveResult() {
    // TODO jsonデータ上書き
    console.log(result);
  }

  return (
    <div>
      <table id="mainTable">
        <tbody>
          {result.map((value, index) => {
            if (index % 20 === 0) {
              return (
                <Row
                  key={index}
                  row={index / 20}
                  result={result.slice(index, index + 20)}
                  name={name}
                  changeResult={changeResult}
                ></Row>
              );
            }
          })}
        </tbody>
      </table>
      <button onClick={addRow}>行追加</button>
      <button onClick={saveResult}>保存</button>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
