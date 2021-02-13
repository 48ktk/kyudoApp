import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";

import OverviewCard from "./components/overviewCard";
import Comment from "./pages/comment";
import "./styles/kyudo-table.scss";
import Table from "./pages/editTable";

// import firebase from "@/plugins/firebase";

const App = () => {
  // eslint-disable-next-line
  const database = firebase.database();
  // let data;
  const [data, setData] = useState({});
  let name = "";
  useEffect(() => {
    // eslint-disable-next-line
    database.ref("members/1/data/20210122").on("value", (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        console.log(data);
      }
    });
    // eslint-disable-next-line
    database.ref("members/1/name").on("value", (snapshot) => {
      if (snapshot.exists()) {
        name = snapshot.val();
        console.log(name);
      }
    });
  }, []);
  // const data = {
  //   // prettier-ignore
  //   "name": "田中太郎",
  //   // prettier-ignore
  //   "grade": 3,
  //   // prettier-ignore
  //   "data": [
  //     {
  //       // prettier-ignore
  //       "date": {"20210122": 58},
  //       // prettier-ignore
  //       "result": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  //         null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
  //         // 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  //         1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  //         // prettier-ignore
  //       "comment": [
  //         {
  //           // prettier-ignore
  //           "target": 13,
  //           // prettier-ignore
  //           "commentator": "田中太郎",
  //           // prettier-ignore
  //           "postedDate": "2021-01-22 11:34:56",
  //           // prettier-ignore
  //           "content": "姿勢が悪かった"
  //         }
  //       ]
  //     }
  //   ],
  // };
  return (
    <Router>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="試合一覧" />
        </ListItem>
        <ListItem button component={Link} to="/input">
          <ListItemText primary="追加・編集" />
        </ListItem>
        <ListItem button component={Link} to="/comment">
          <ListItemText primary="コメント・詳細" />
        </ListItem>
      </List>

      <Switch>
        <Route exact path="/">
          <OverviewCard />
        </Route>
        <Route exact path="/input">
          <Table row={2} data={data} name={name} />
        </Route>
        <Route exact path="/comment">
          <Comment />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
// ReactDOM.render(<HeadingCard date="2017-10-12" title="リーグ戦第一戦対日本大学戦" result="120-141" />, document.getElementById("card"));
