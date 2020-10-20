import {combineReducers} from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../actions';

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todoId: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.todoId === action.payload.todoId
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    case REMOVE_TODO:
      const filteredTodos = state.filter(
        (todo) => todo.todoId !== action.payload.todoId,
      );
      return [...filteredTodos];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
});

export default rootReducer;