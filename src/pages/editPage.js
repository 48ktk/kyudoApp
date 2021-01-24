import React, { useState } from "react";
import PropTypes from "prop-types";
import TableRow from "../components/tableRow";

function MainTable(props) {
  // TODO こっちでresultをuseStateする、それを子コンポーネントに渡す
  // 配列の配列
  let rowNumber = props.row;
  let initResult = [];
  for (let i = 0; i < rowNumber; i++) {
    initResult.push(Array(20).fill(null));
  }
  const [result, setResult] = useState(initResult);
  const tmp = props.tmp;
  console.log(tmp);

  const addRow = () => {
    console.log("+++++ add clicked");
    let tmpArray = JSON.parse(JSON.stringify(result));
    tmpArray.push(Array(20).fill(null));
    setResult(tmpArray);
  };
  function saveResult() {
    // TODO テーブルのデータ取得
    console.log(result);
  }

  return (
    <div>
      <table id="mainTable">
        <tbody>
          <TableRow
            tmp="first row"
            result={result}
            setResult={setResult}
          ></TableRow>
        </tbody>
      </table>
      <button onClick={addRow}>行追加</button>
      <button onClick={saveResult}>保存</button>
    </div>
  );
}
MainTable.propTypes = {
  tmp: PropTypes.string,
  row: PropTypes.number,
};
export default MainTable;
