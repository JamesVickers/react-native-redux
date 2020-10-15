/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

/*
 * action creators
 */

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text,
  },
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: {
    todoId,
  },
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: {
    todoId,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});
