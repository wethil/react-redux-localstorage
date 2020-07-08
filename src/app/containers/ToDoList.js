import React from "react";
import PropTypes from "prop-types";

import Sidebar from "./view/Sidebar";
import List from "./view/List";

import styles from "./ToDoList.module.scss";

export default function ToDoList({ actions, state }) {
  const {
    createCategory,
    activeCategory,
    addSingleToDo,
    toggleTodo,
    removeTodo,
    deleteCategory,
  } = actions;
  return (
    <div className={styles.container}>
      <Sidebar
        state={state}
        deleteCategory={deleteCategory}
        createCategory={createCategory}
        activeCategory={activeCategory}
      />
      <List
        state={state}
        activeCategory={activeCategory}
        addSingleToDo={addSingleToDo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

ToDoList.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};
