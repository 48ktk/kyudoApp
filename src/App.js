import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import { Route, MemoryRouter } from "react-router";
// import { Link as RouterLink } from "react-router-dom";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import Comment from "./pages/comment";
// import MainTable from "./pages/input";
import "./styles/kyudo-table.scss";
import ListRouter from "./components/button";
import HeadingCard from "./components/headingCard"

ReactDOM.render(<h1>yugamae top page</h1>, document.getElementById("root"));

ReactDOM.render(<ListRouter />, document.getElementById("linklist"));

ReactDOM.render(<HeadingCard />, document.getElementById("card"));

// ReactDOM.render(<AddButton />, document.getElementById("addbutton"));

// ReactDOM.render(<EditButton />, document.getElementById("editbutton"));

// const ToComment = () => (
//   <BrowserRouter>
//     <div>
//       <Link to="/comment">comment</Link>
//       <Route path="/comment" component={Comment} />
//     </div>
//   </BrowserRouter>
// );

// const ToInput = () => (
//   <BrowserRouter>
//     <div>
//       <Route path="/input" render={() => <MainTable tmp={"test"} />} />
//     </div>
//   </BrowserRouter>
// );

// ReactDOM.render(<ToComment />, document.getElementById("comment"));

// ReactDOM.render(<ToInput />, document.getElementById("create"));


