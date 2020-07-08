export const ADD_TODO = "ADD_TODO";
export function addSingleToDo(todoObject) {
  return {
    type: ADD_TODO,
    todoObject,
  };
}

export const TOGGLE_TODO = "TOGGLE_TODO";
export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    todoId,
  };
}

export const REMOVE_TODO = "REMOVE_TODO";
export function removeTodo(todoId) {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    category,
  };
}

export const ACTIVE_CATEGORY = "ACTIVE_CATEGORY";
export function activeCategory(category) {
  return {
    type: ACTIVE_CATEGORY,
    category,
  };
}

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export function deleteCategory(categoryId) {
  return {
    type: DELETE_CATEGORY,
    categoryId,
  };
}
