import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Row from "../components/Row";

const Table = (props) => {
  const data = props.data;
  console.log(data); // {comment: {…}, result: Array(58)}
  let initResult = [];
  const name = props.name;

  // データが存在しない場合1行分作成
  if (!data.result.length) {
    initResult.push(Array(20).fill(null));
  } else {
    initResult = data.result;
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
  /**
   * 的中未入力の末尾要素を削除する関数
   * @param {*} array
   */
  const removeLastNull = (array) => {
    while (array[array.length - 1] == null && array.length != 0) {
      array.pop();
    }
  };
  function updateDB(data) {
    // eslint-disable-next-line
    const database = firebase.database();
    database.ref("members/1/data/20210122/result").set(data);
  }

  function saveResult() {
    // TODO jsonデータ上書き
    removeLastNull(result);
    console.log(result);
    updateDB(result);
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
  name: PropTypes.string,
};

export default Table;
