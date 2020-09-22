import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./kyudo-table.css";

ReactDOM.render(<h1>大学弓道リーグ戦形式　試合成績</h1>, document.getElementById("root"));
/**
 * 個人的中表示欄作成関数
 * @param {*} props
 */
function CreateEachScoreField(props) {
  // Todo 合計計算処理 該当playerの的中が変わるたび
  return <th className={"player" + props.order}></th>;
}
CreateEachScoreField.propTypes = {
  order: PropTypes.string,
};
// 先立、後立の合計表示欄
function CreateTachiTortal(props) {
  if (props.tachi == "first half") {
    // Todo 先立の合計計算処理（player1~4の的中変わるたび）
    console.log("先立");
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
  return (
    //Todo clickで 〇 → ・（バツ）→ " "（空白）→ 〇 と入力可能にする
    <td className={"player" + props.order} onClick={() => alert("click")}>
      〇
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
 * 立（4人4射）×2（先立・後立）欄作成
 * @param {*} props 
 */
function CreateTachi(props){
  return (
    <tbody className={"try" + props.order}>
      <CreateRow />
      <CreateRow />
      <CreateRow />
      <CreateRow />
    </tbody>
  )
}
CreateTachi.propTypes={
  order:PropTypes.string,
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
ReactDOM.render(
  <table width="98%">
    <tbody className="total">
      <CreateScoreRow />
    </tbody>
    <CreateTachi order="5"/>
    <CreateTachi order="4"/>
    <CreateTachi order="3"/>
    <CreateTachi order="2"/>
    <CreateTachi order="1"/>
    <tbody className="player">
      <CreatePlayerRow />
    </tbody>
  </table>,
  document.getElementById("kyudo-table")
);
