/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./List.module.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoInput: "",
      searchValue: "",
      searchResults: [],
    };
  }

  handleToDoInputChange = (e) => this.setState({ toDoInput: e.target.value });

  handleSavingToDo = (e) => {
    const { addSingleToDo, state } = this.props;
    if (e.key === "Enter") {
      addSingleToDo({
        label: e.target.value,
        categoryId: state.activeCategory.id,
        marked: false,
      });
      this.setState({ toDoInput: "" });
    }
  };

  handleSearch = (e) => {
    const {
      state: { todos },
    } = this.props;
    if (e.target.value) {
      this.setState({
        searchValue: e.target.value,
        searchResults: todos.filter((todo) =>
          todo.label.includes(e.target.value)
        ),
      });
    } else {
      this.setState({ searchResults: [], searchValue: "" });
    }
  };

  handleDeleteToDo(id) {
    const { removeTodo } = this.props;
    removeTodo(id);
  }

  handleToDoMark(id) {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }

  handleFocusToCategory(id) {
    const { activeCategory, state } = this.props;
    const category = state.categories.find((cat) => cat.id === id);
    this.setState(
      {
        searchResults: [],
        searchValue: "",
      },
      () => activeCategory(category)
    );
  }

  render() {
    const { state } = this.props;
    const { toDoInput, searchResults, searchValue } = this.state;
    const activeCategoryTodos = state.todos.filter(
      (todo) => todo.categoryId === state.activeCategory.id
    );
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            type="text"
            value={searchValue}
            placeholder="Search a To Do"
            onChange={this.handleSearch}
          />
        </div>

        {searchResults.map(({ label, categoryId }, index) => (
          <div key={index} className={styles.todoSearch}>
            <div
              role="button"
              tabIndex={index}
              onClick={() => this.handleFocusToCategory(categoryId)}
              className={styles.label}
            >
              {" "}
              {label}{" "}
            </div>
          </div>
        ))}

        <h1> {state.activeCategory.label} </h1>
        <div>
          {activeCategoryTodos.map(({ id, label, marked }, index) => (
            <div className={styles.todoSingle} key={index}>
              <input
                type="checkbox"
                checked={marked}
                onChange={() => this.handleToDoMark(id)}
              />
              <div className={styles.label}> {label} </div>
              <div
                role="button"
                className={styles.remove}
                tabIndex="-1"
                onClick={() => this.handleDeleteToDo(id)}
                onKeyPress={() => this.handleDeleteToDo(id)}
              >
                x
              </div>
            </div>
          ))}
        </div>
        <div className={styles.createToDo}>
          <input
            type="text"
            value={toDoInput}
            placeholder="Create a To Do"
            onChange={this.handleToDoInputChange}
            onKeyPress={this.handleSavingToDo}
          />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  state: PropTypes.object.isRequired,
  addSingleToDo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  activeCategory: PropTypes.func.isRequired,
};
