import React from "react";
import PropTypes from "prop-types";
import "./kyudo-table.css";

/*********
横ver
*********/
/**
 * 表コンポーネント
 * @param {*} props 
 */
function MainTable(props) {
  const tmp = props.tmp;
  console.log(tmp);
  // 最終的にはユーザーが試合形式を指定できる
  const NUMBER_OF_PLAYER = 8;
  const TRIAL_PER_PLAYER = 20;
  // 的中データ X人 × Y射
  const rawData = [];
  // <tbody></tbody>に はさむ用
  let tableRow = [];
  for (let i = 0; i < NUMBER_OF_PLAYER; i++) {
    // 1行分の的中データをテーブル形式にする
    let tableData = [];
    // 氏名
    tableData.push(
      <td key={"playername" + i} className={"player-name"}>
        {"名前"}
      </td>
    );
    // 的中欄
    // clickで的中を 〇 → ・ → " " → 〇 に変更できる
    for (let j = 0; j < TRIAL_PER_PLAYER; j++) {
      rawData.push("〇");
      // todo onClick
      tableData.push(<td key={"player" + i + "trial" + j}>{rawData[j]}</td>);
    }
    // 合計欄
    // todo 的中欄が変わるたびに再計算が走る
    tableData.push(
      <th key={"result" + i} className={"player-result"}>
        {"合計的中"}
      </th>
    );
    // 1行分の的中データを格納
    tableRow.push(<tr key={"row" + i}>{tableData}</tr>);
  }

  return (
    <table>
      <tbody>{tableRow}</tbody>
    </table>
  );
}
MainTable.propTypes = {
  tmp: PropTypes.string,
};

/**
 * 的中入力欄作成関数
 * @param {} props
 */
function CreateEntryField(props) {
  const trial = props.trial;
  // props.resultには一人の的中データ全部が入っている。。setResultでは更新分だけ置き換えてはくれない
  // https://ja.reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  return (
    <td
      className={"player" + props.order}
      onClick={() => {
        console.log(props.result[trial]);
        if (props.result[trial] == "〇") {
          props.setResult({ ...props.result, [trial]: "・" });
        } else if (props.result[trial] == "・") {
          props.setResult({ ...props.result, [trial]: " " });
        } else if (props.result[trial] == " ") {
          props.setResult({ ...props.result, [trial]: "〇" });
        } else {
          alert("error");
        }
      }}
    >
      {props.result[trial]}
    </td>
  );
}
CreateEntryField.propTypes = {
  order: PropTypes.string,
  trial: PropTypes.string,
  result: PropTypes.object,
  setResult: PropTypes.func,
};

export default MainTable;
