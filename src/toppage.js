import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Comment from "./pages/comment";
import MainTable from "./pages/index";

ReactDOM.render(
  <h1>yugamae top page</h1>,
  document.getElementById("root")
);

const ToComment = () => (
  <BrowserRouter>
  <div>
    <Link to="/comment">comment</Link>
    <Route path="/comment" component={Comment} />
  </div>
  </BrowserRouter>
)

const ToCreate = () => (
  <BrowserRouter>
  <div>
    <Link to="/create">create</Link>
    <Route path="/create" render={() => <MainTable tmp={"test"}/> } />
  </div>
  </BrowserRouter>
)

ReactDOM.render(
  <ToComment/>,
  document.getElementById("comment")
);

ReactDOM.render(
  <ToCreate/>,
  document.getElementById("create")
);
