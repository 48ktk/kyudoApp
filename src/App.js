import React from "react";
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
import MainTable from "./pages/editPage";
import "./styles/kyudo-table.scss";

const App = () => {
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
          <MainTable row={2} />
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
