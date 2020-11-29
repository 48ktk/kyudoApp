import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import { Route, MemoryRouter } from "react-router";
// import {BrowserRouter as Router} from "react-router";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";

import MainTable from "../pages/input";
import Comment from "../pages/comment";

function BaseButton(props) {
  return <Button startIcon={props.icon}>{props.message}</Button>;
}
BaseButton.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.object,
};

// function SaveButton() {
//   // コンポーネントをpropsで渡してるのヤバそう
//   return <BaseButton message="保存" icon={<SaveIcon />} />;
// }

// function AddButton() {
//   return <BaseButton message="追加" icon={<AddIcon />} />;
// }

// function EditButton() {
//   return (

//     <Link to="/input">
//       <BaseButton message="編集" icon={<EditIcon />} />;
//     </Link>
//   );
// }

//export { SaveButton, AddButton};
export default function ListRouter() {
  //const classes = useStyles();

  return (
    <Router>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="MainTable" />
        </ListItem>
        <ListItem button component={Link} to="/comment">
          <ListItemText primary="Comment" />
        </ListItem>
      </List>

      <Switch>
        <Route exact path="/">
          <MainTable />
        </Route>
        <Route exact path="/comment">
          <Comment />
        </Route>
      </Switch>
    </Router>
  );
}
/* <div className={classes.root}>
        <Button component={LinkBehavior} to="/input">
          input
        </Button>
        <br />
        <Button component={Comment} to="/input">
          comment
        </Button>
</div> */
