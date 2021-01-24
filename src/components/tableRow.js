import React, { useEffect } from "react";
import PropTypes from "prop-types";

/*********
横ver
*********/
/**
 * 表コンポーネント
 * @param {*} props 表示するjsonデータ
 */
function TableRow(props) {
  // const date = new Date();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const today = "" + month + "/" + day;

  // 配列の配列
  let result = props.result;
  const setResult = props.setResult;
  const tmp = props.tmp;
  console.log(tmp);

  // nullを""0を"・"1を"〇"で表示
  const resultMapping = { null: "", 0: "・", 1: "〇" };
  useEffect(() => {
    console.log(props.row);
  }, [props.row]);
  /**
   * 的中変更関数
   * @param {*} e
   */
  const changeResult = (e) => {
    // 何行目か
    const rowNumber = e.target.className;
    console.log(e.target.className);
    // 何射目か
    const order = parseInt(e.target.id.replace(/[^0-9]/g, ""));
    // TODO 0は何行目かの変数に置き換え
    const value = result[rowNumber][order];
    let tmpArray = JSON.parse(JSON.stringify(result));
    if (value == null) {
      tmpArray[rowNumber][order] = 1;
    } else if (value === 0) {
      tmpArray[rowNumber][order] = null;
    } else if (value === 1) {
      tmpArray[rowNumber][order] = 0;
    }
    setResult(tmpArray);
  };

  // 的中データをテーブル形式にする
  let tableRow = [];
  let tableData = [];

  // 氏名
  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
      tableData.push(
        <td key={"playername"} className={"player-name"}>
          <input type={"text"} defaultValue={"名前"}></input>
        </td>
      );
    } else {
      tableData.push(
        <td key={"memo-space" + i} className={"memo-space"}>
          <input type={"text"} defaultValue={"メモ"}></input>
        </td>
      );
    }
    // 的中欄
    // clickで的中を 〇 → ・ → " " → 〇 に変更できる
    for (let j = 0; j < 20; j++) {
      // todo onClick
      tableData.push(
        <td
          // key={"player" + i + "trial" + j}
          id={"trial" + j}
          className={i}
          onClick={changeResult}
        >
          {resultMapping[result[i][j]]}
        </td>
      );
    }
    // 合計欄
    // todo 的中欄が変わるたびに再計算が走る
    let total = result[i].reduce((sum, element) => sum + element, 0);
    // TODO: 再レンダリングでここは走っているっぽい  なぜ？？？？？？
    if (total == 20) {
      total = "皆中";
    }
    tableData.push(
      <th
        //key={"score" + i}
        className={"player-score"}
        //id={"player" + i + "-" + "score"}
      >
        {total}
      </th>
    );
    tableRow.push(<tr>{tableData}</tr>);
    tableData = [];
  }

  return tableRow;
}
TableRow.propTypes = {
  tmp: PropTypes.string,
  setResult: PropTypes.func,
  row: PropTypes.number,
  result: PropTypes.array,
};

export default TableRow;
