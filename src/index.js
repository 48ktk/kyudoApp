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
  //let score = 0;
  // 描画後でないとtableを取得できない
  // useEffect(() => {
  //   const table = document.getElementById("main-table");
  //   const cells = table.querySelectorAll("td.player" + props.order);
  //   console.log(cells);
  //   cells.forEach((cell) => {
  //     if (cell.innerText == "〇") {
  //       score++;
  //     }
  //     document.querySelector("th.player" + props.order).innerText = score;
  //   });
  // },[score]);
  return <th className={"player" + props.order}>{props.score}</th>;
}
CreateEachScoreField.propTypes = {
  order: PropTypes.string,
  score: PropTypes.number,
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
// function CreateGrandTotal() {
//   // Todo 合計計算処理 playerの的中変わるたび
//   return <th>160</th>;
// }
// 各種的中合計の表示欄
// function CreateScoreRow() {
//   return (
//     <tr>
//       <CreateEachScoreField order="1" />
//       <CreateEachScoreField order="2" />
//       <CreateEachScoreField order="3" />
//       <CreateEachScoreField order="4" />
//       <CreateTachiTortal tachi="first half" />
//       <CreateGrandTotal />
//       <CreateTachiTortal tachi="second half" />
//       <CreateEachScoreField order="8" />
//       <CreateEachScoreField order="7" />
//       <CreateEachScoreField order="6" />
//       <CreateEachScoreField order="5" />
//     </tr>
//   );
// }
/**
 * 的中入力欄作成関数
 * @param {} props
 */
function CreateEntryField(props) {
  //Todo clickで 〇 → ・（バツ）→ " "（空白）→ 〇 と入力可能にする
  //const [result, setResult] = useState("〇");
  const trial = props.trial;
  // props.resultには一人の的中データ全部が入っている。。setResultでは更新分だけ置き換えてはくれない
  // https://ja.reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  return (
    <td
      className={"player" + props.order}
      onClick={() => {
        console.log(props.result[trial]);
        if (props.result[trial] == "〇") {
          props.setResult({ ...props.result, [trial]: "・"});
        } else if (props.result[trial] == "・") {
          props.setResult({ ...props.result, [trial]: " "});
        } else if (props.result[trial] == " ") {
          props.setResult({ ...props.result, [trial]: "〇"});
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
// function CreatePlayerRow() {
//   return (
//     <tr>
//       <CreatePlayerNameField name="A" />
//       <CreatePlayerNameField name="B" />
//       <CreatePlayerNameField name="C" />
//       <CreatePlayerNameField name="D" />
//       <CreateEmpty />
//       <CreatePlayerNameField name="あ大学" />
//       <CreateEmpty />
//       <CreatePlayerNameField name="H" />
//       <CreatePlayerNameField name="G" />
//       <CreatePlayerNameField name="F" />
//       <CreatePlayerNameField name="E" />
//     </tr>
//   );
// }

// ReactDOM.render(
//   <table width="98%" id="main-table">
//     <tbody className="total">
//       <CreateScoreRow />
//     </tbody>
//     <CreateTachi order="5" />
//     <CreateTachi order="4" />
//     <CreateTachi order="3" />
//     <CreateTachi order="2" />
//     <CreateTachi order="1" />
//     <tbody className="player">
//       <CreatePlayerRow />
//     </tbody>
//   </table>,
//   document.getElementById("kyudo-table")
// );

/*********
横ver
*********/

function CreatePlayer(props) {
  // 将来的には射数もユーザーが入力
  const TRIAL_COUNT = 20;
  const initialAllResults = {};
  for(let i = 0; i < TRIAL_COUNT; i++) {
    initialAllResults["trial" + i] = "〇";
  }
  // 親で的中データを持っておく（状態を管理する？）
  const [result, setResult] = useState(initialAllResults);
  console.log(result);
  //  playerの的中が変わるたび合計計算処理
  // 結局親でやるしかない？このままだとCreateEachScoreFieldは多分いらない
  let score = 0;
  // 描画後でないとtableを取得できない
  useEffect(() => {
    const table = document.getElementById("test-table");
    const cells = table.querySelectorAll("td.player" + props.order);
    console.log(cells);
    cells.forEach((cell) => {
      if (cell.innerText == "〇") {
        score++;
      }
      document.querySelector("th.player" + props.order).innerText = score;
    });
  });
  
  let entryField = [];
  // keyが必要 https://ja.reactjs.org/docs/lists-and-keys.html
  for (let i = 0; i < TRIAL_COUNT; i++) {
    entryField.push(
      <CreateEntryField
        key={i}
        order={props.order}
        trial={"trial" + i}
        result={result}
        setResult={setResult}
      />
    );
  }
  return (
    <tr>
      <CreatePlayerNameField name={props.name} />
      {entryField}
      <CreateEachScoreField order={props.order} score={score} />
    </tr>
  );
}
CreatePlayer.propTypes = {
  name: PropTypes.string,
  order: PropTypes.string,
};

ReactDOM.render(
  <table width="98%" id="test-table">
    <tbody>
      <CreatePlayer name="A" order="1" />
      <CreatePlayer name="B" order="2" />
      <CreatePlayer name="C" order="3" />
      <CreatePlayer name="D" order="4" />
    </tbody>
  </table>,
  document.getElementById("test")
);
