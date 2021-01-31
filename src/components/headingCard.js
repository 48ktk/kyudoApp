import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Comment from "../pages/comment";
import Table from "../pages/editTable";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
// todo cardの親コンポーネント作成
export default function HeadingCard(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {/* 2017-10-12 */}
          {prop.date}
        </Typography>
        <Typography variant="h5" component={("h2", Link)} to="/input">
          {/* リーグ戦第一戦対日本大学戦 */}
          {prop.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* 120-141 */}
          {prop.result}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="/comment">
          詳細
        </Button>
        <Router>
          <Switch>
            <Route exact path="/input">
              <Table></Table>
            </Route>
            <Route exact path="/comment">
              <Comment />
            </Route>
          </Switch>
        </Router>
      </CardActions>
    </Card>
  );
}
