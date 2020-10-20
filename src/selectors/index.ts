import {VisibilityFilters} from '../actions';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

export const getTodosByVisibilityFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
};
