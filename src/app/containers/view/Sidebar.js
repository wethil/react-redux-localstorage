import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./SideBar.module.scss";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
    };
  }

  handleCategoryInputChange = (e) =>
    this.setState({ categoryInput: e.target.value });

  handleSavingCategory = (e) => {
    const { createCategory } = this.props;
    if (e.key === "Enter") {
      createCategory(e.target.value);
      this.setState({ categoryInput: "" });
    }
  };

  handleFocusToCategory(id) {
    const { activeCategory } = this.props;
    activeCategory(id);
  }

  handleDDeleteCategory(id) {
    const { deleteCategory, activeCategory } = this.props;
    deleteCategory(id);
    activeCategory({ default: true });
  }

  render() {
    const { categoryInput } = this.state;
    const { state } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.createCategory}>
          <input
            type="text"
            value={categoryInput}
            placeholder="Create a category"
            onChange={this.handleCategoryInputChange}
            onKeyPress={this.handleSavingCategory}
          />
        </div>
        <div className={styles.categoriesList}>
          {state.categories.map(({ id, label }, index) => (
            <div className={styles.innerContainer} key={index}>
              <div
                className={styles.categoryLabel}
                onClick={() => this.handleFocusToCategory({ id, label })}
                role="button"
                tabIndex={index}
                onKeyPress={() => this.handleFocusToCategory({ id, label })}
              >
                {label}
              </div>
              {id !== "tasks" && (
                <div
                  onClick={() => this.handleDDeleteCategory(id)}
                  role="button"
                  tabIndex={index}
                  onKeyPress={() => this.handleDDeleteCategory(id)}
                  className={styles.remove}
                >
                  x
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  createCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};
