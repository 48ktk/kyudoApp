import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/*********
横ver
*********/
/**
 * 表コンポーネント
 * @param {*} props 表示するjsonデータ
 */
function MainTable(props) {
  // const date = new Date();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const today = "" + month + "/" + day;

  // 配列の配列
  const [result, setResult] = useState([Array(20).fill(null)]);
  const tmp = props.tmp;
  console.log(tmp);

  // nullを""0を"・"1を"〇"で表示
  const resultMapping = { null: "", 0: "・", 1: "〇" };
  useEffect(() => {
    if(total === 20) {
      console.log("+++++皆中")
    }
  });
  /**
   * 的中変更関数
   * @param {*} e
   */
  const changeResult = (e) => {
    console.log(e.target.id);
    // 何射目か
    const order = parseInt(e.target.id.replace(/[^0-9]/g, ""));
    const value = result[0][order];
    let tmpArray = JSON.parse(JSON.stringify(result));
    if (value == null) {
      tmpArray[0][order] = 1;
    } else if (value === 0) {
      tmpArray[0][order] = null;
    } else if (value === 1) {
      tmpArray[0][order] = 0;
    }
    setResult(tmpArray);
  };

  // 1行分の的中データをテーブル形式にする
  let tableData = [];
  // 氏名
  tableData.push(
    <td
    //key={"playername" + i}
    className={"player-name"}
    >
      <input type={"text"} defaultValue={"名前"}></input>
    </td>
  );
  // 的中欄
  // clickで的中を 〇 → ・ → " " → 〇 に変更できる
  for (let j = 0; j < 20; j++) {
    // todo onClick
    tableData.push(
      <td
        // key={"player" + i + "trial" + j}
        id={"trial" + j}
        onClick={changeResult}
      >
        {resultMapping[result[0][j]]}
      </td>
    );
  }
  // 合計欄
  // todo 的中欄が変わるたびに再計算が走る
  let total = result[0].reduce((sum, element) => sum + element, 0);
  // TODO: 再レンダリングでここは走っているっぽい  なぜ？？？？？？
  if(total == 20) {
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
  return (
    <table>
      <tbody>
        <tr>{tableData}</tr>
      </tbody>
    </table>
  );
}
MainTable.propTypes = {
  tmp: PropTypes.string,
};

export default MainTable;
