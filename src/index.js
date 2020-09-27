import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./kyudo-table.css";

ReactDOM.render(
  <h1>大学弓道リーグ戦形式　試合成績</h1>,
  document.getElementById("root")
);
/**
 * 個人的中表示欄作成関数
 * @param {*} props
 */
function CreateEachScoreField(props) {
  // Todo 合計計算処理 該当playerの的中が変わるたび
  let score = 0;
  // 描画後でないとtableを取得できない
  useEffect(() => {
    const table = document.getElementById("main-table");
    const cells = table.querySelectorAll("td.player" + props.order);
    
    cells.forEach((cell) => {
      if (cell.innerText == "〇") {
        score++;
      }
      document.querySelector("th.player" + props.order).innerText = score;
    });
  });
  return <th className={"player" + props.order}></th>;
}
CreateEachScoreField.propTypes = {
  order: PropTypes.string,
};
// 前立、後立の合計表示欄
function CreateTachiTortal(props) {
  if (props.tachi == "first half") {
    // Todo 前立の合計計算処理（player1~4の的中変わるたび）
    console.log("前立");
  } else {
    // Todo 同上
    console.log("後立");
  }
  return <th>80</th>;
}
CreateTachiTortal.propTypes = {
  tachi: PropTypes.string,
};
// 総計表示欄
function CreateGrandTotal() {
  // Todo 合計計算処理 playerの的中変わるたび
  return <th>160</th>;
}
// 各種的中合計の表示欄
function CreateScoreRow() {
  return (
    <tr>
      <CreateEachScoreField order="1" />
      <CreateEachScoreField order="2" />
      <CreateEachScoreField order="3" />
      <CreateEachScoreField order="4" />
      <CreateTachiTortal tachi="first half" />
      <CreateGrandTotal />
      <CreateTachiTortal tachi="second half" />
      <CreateEachScoreField order="8" />
      <CreateEachScoreField order="7" />
      <CreateEachScoreField order="6" />
      <CreateEachScoreField order="5" />
    </tr>
  );
}
/**
 * 的中入力欄作成関数
 * @param {} props
 */
function CreateEntryField(props) {
  //Todo clickで 〇 → ・（バツ）→ " "（空白）→ 〇 と入力可能にする
  const [result, setResult] = useState("〇");
  return (
    <td
      className={"player" + props.order}
      onClick={() => {
        console.log({ result });
        if (result == "〇") {
          setResult("・");
        } else if (result == "・") {
          setResult(" ");
        } else if (result == " ") {
          setResult("〇");
        } else {
          alert("error");
        }
      }}
    >
      {result}
    </td>
  );
}
CreateEntryField.propTypes = {
  order: PropTypes.string,
};
// 空欄
function CreateEmpty() {
  return <td></td>;
}
// 8人1射ずつ
function CreateRow() {
  return (
    <tr>
      <CreateEntryField order="1" />
      <CreateEntryField order="2" />
      <CreateEntryField order="3" />
      <CreateEntryField order="4" />
      <CreateEmpty />
      <CreateEmpty />
      <CreateEmpty />
      <CreateEntryField order="8" />
      <CreateEntryField order="7" />
      <CreateEntryField order="6" />
      <CreateEntryField order="5" />
    </tr>
  );
}
/**
 * 立（4人4射）×2（前立・後立）欄作成
 * @param {*} props
 */
function CreateTachi(props) {
  return (
    <tbody className={"try" + props.order}>
      <CreateRow />
      <CreateRow />
      <CreateRow />
      <CreateRow />
    </tbody>
  );
}
CreateTachi.propTypes = {
  order: PropTypes.string,
};
// 選手名
function CreatePlayerNameField(props) {
  return <td>{props.name}</td>;
}
CreatePlayerNameField.propTypes = {
  name: PropTypes.string,
};
// 選手行作成関数
function CreatePlayerRow() {
  return (
    <tr>
      <CreatePlayerNameField name="A" />
      <CreatePlayerNameField name="B" />
      <CreatePlayerNameField name="C" />
      <CreatePlayerNameField name="D" />
      <CreateEmpty />
      <CreatePlayerNameField name="あ大学" />
      <CreateEmpty />
      <CreatePlayerNameField name="H" />
      <CreatePlayerNameField name="G" />
      <CreatePlayerNameField name="F" />
      <CreatePlayerNameField name="E" />
    </tr>
  );
}

const TRIAL_COUNT = 20;
let entryField = [];
for (let i = 0; i < TRIAL_COUNT; i++) {
  entryField.push(<CreateEntryField order="1" />);
}
function CreatePlayer(props) {
  console.log("player" + props.order);
  return (
    <tr>
      <CreatePlayerNameField name="A" />
      {entryField}
      <CreateEachScoreField order={props.order} />
    </tr>
  );
}
CreatePlayer.propTypes = {
  order: PropTypes.string,
};

ReactDOM.render(
  <table width="98%" id="main-table">
    <tbody className="total">
      <CreateScoreRow />
    </tbody>
    <CreateTachi order="5" />
    <CreateTachi order="4" />
    <CreateTachi order="3" />
    <CreateTachi order="2" />
    <CreateTachi order="1" />
    <tbody className="player">
      <CreatePlayerRow />
    </tbody>
  </table>,
  document.getElementById("kyudo-table")
);

ReactDOM.render(
  <table width="98%">
    <tbody>
      <CreatePlayer order="1" />
    </tbody>
  </table>,
  document.getElementById("test")
);
