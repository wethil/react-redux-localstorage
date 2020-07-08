import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ToDoList from "./app/containers/ToDoList";
import * as actions from "./app/store/toDoWithCategory/actions";

function App(props) {
  const { toDoWithCategories, ...rest } = props;
  return <ToDoList actions={rest} state={toDoWithCategories} />;
}

const mapStateToProps = (state = {}) => {
  return state;
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  toDoWithCategories: PropTypes.object.isRequired,
};
