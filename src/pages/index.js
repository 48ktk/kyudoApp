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
  /**
   * 的中再計算関数
   * @param {*} position 何人目の何射目が変更されたかをidでIN
   */
  const calculateScore = (position) => {
    let score = 0;
    let array = position.match(/[0-9]+[0-9]*/g); // [0]:player, [1]:order
    for (let i = 0; i < array.length; i++) {
      console.log(parseInt(array[i]));
    }
    // todo 単一要素の取り出しにする でもidは使いたくない気がする
    const player = document.getElementsByClassName("player" + array[0]);
    console.log(player);
    const results = player[0].querySelectorAll("td");
    results.forEach((result) => {
      if (result.innerHTML === "〇") {
        score++;
      }
    });
    if (score === 20) {
      score = "皆中";
    }
    // if (score === 0) {
    //   score = "残念";
    // }
    document.querySelector("#player" + array[0] + "-score").innerHTML = score;
  };
  /**
   * 的中変更関数
   * @param {*} e
   */
  const changeResult = (e) => {
    console.log(e.target.id);
    let result = e.target.innerHTML;
    if (result === "〇") {
      e.target.innerHTML = "・";
    } else if (result == "・") {
      e.target.innerHTML = " ";
    } else if (result == " ") {
      e.target.innerHTML = "〇";
    } else {
      alert("error");
    }
    calculateScore(e.target.id);
  };
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
      tableData.push(
        <td
          key={"player" + i + "trial" + j}
          id={"player" + i + "-" + "trial" + j}
          onClick={changeResult}
        >
          {rawData[j]}
        </td>
      );
    }
    // 合計欄
    // todo 的中欄が変わるたびに再計算が走る
    tableData.push(
      <th key={"score" + i} className={"player-score"} id={"player" + i + "-" + "score"}>
        {"合計的中"}
      </th>
    );
    // 1行分の的中データを格納
    tableRow.push(<tr key={"row" + i} className={"player" + i}>{tableData}</tr>);
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
