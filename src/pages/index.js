import React, { useState } from "react";
import PropTypes from "prop-types";
import "./kyudo-table.css";

/*********
横ver
*********/
/**
 * 個人的中表示欄作成関数
 * @param {*} props
 */
function CreateEachScoreField(props) {
  return <th className={"player" + props.order}>{props.score}</th>;
}
CreateEachScoreField.propTypes = {
  order: PropTypes.string,
  score: PropTypes.number,
};
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
// 選手名
function CreatePlayerNameField(props) {
  return <td>{props.name}</td>;
}
CreatePlayerNameField.propTypes = {
  name: PropTypes.string,
};

function CreatePlayer(props) {
  // 将来的には射数もユーザーが入力
  const TRIAL_COUNT = 20;
  const initialAllResults = {};
  for (let i = 0; i < TRIAL_COUNT; i++) {
    initialAllResults["trial" + i] = "〇";
  }
  // 親で的中データを持っておく（状態を管理する？）
  const [result, setResult] = useState(initialAllResults);
  console.log(result);
  //  playerの的中が変わるたび合計計算処理
  // 結局親でやるしかない？このままだとCreateEachScoreFieldは多分いらない
  let score = 0;

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
    <table>
      <tbody>
        <tr>
          <CreatePlayerNameField name={props.name} />
          {entryField}
          <CreateEachScoreField order={props.order} score={score} />
        </tr>
      </tbody>
    </table>
  );
}
CreatePlayer.propTypes = {
  name: PropTypes.string,
  order: PropTypes.string,
};

export default CreatePlayer;
