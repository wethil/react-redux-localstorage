import { defineState } from "redux-localstore";
import * as actions from "./actions";

const randomId = () => `_${Math.random().toString(36).substr(2, 9)}`;

const defaultCategory = { id: "tasks", label: "Tasks" };

const defaultState = {
  categories: [defaultCategory],
  todos: [],
  activeCategory: defaultCategory,
};

const initialState = defineState(defaultState)("toDoWithCategories");

export default function todoWithCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: randomId(), ...action.todoObject }],
      };
    }
    case actions.TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          const currentTodo = { ...todo };
          if (action.todoId === todo.id) {
            currentTodo.marked = !todo.marked;
          }
          return currentTodo;
        }),
      };
    }
    case actions.REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    }
    case actions.CREATE_CATEGORY: {
      return {
        ...state,
        categories: [
          ...state.categories,
          { id: randomId(), label: action.category },
        ],
      };
    }

    case actions.ACTIVE_CATEGORY: {
      return {
        ...state,
        activeCategory: action.category.default
          ? defaultCategory
          : action.category,
      };
    }

    case actions.DELETE_CATEGORY: {
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.categoryId !== action.categoryId
        ),
        categories: state.categories.filter(
          (category) => category.id !== action.categoryId
        ),
      };
    }

    default:
      return state;
  }
}

export const getCategories = (state) => state.categories;
export const getTodos = (state) => state.todos;
