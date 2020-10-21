import {Todo} from '../types/todo'
import {TodoActionTypes} from '../types/actions'
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../types/actions';
import { ActionSheetIOS } from 'react-native';


const todosReducerDefaultState: Todo[] = [];

export const todosReducer = (state = todosReducerDefaultState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todoId: action.todo.todoId,
          text: action.todo.text,
          completed: action.todo.completed,
        },
      ];
      case TOGGLE_TODO:
        return state.map((todo) =>
        todo.todoId === action.id
        ? {...todo, completed: !todo.completed}
        : todo,
        );
        case REMOVE_TODO:
          const filteredTodos = state.filter(
            (todo) => todo.todoId !== action.id,
            );
            return [...filteredTodos];
            default:
              return state;
            }
          }
          
const {SHOW_ALL} = VisibilityFilters;
    
export const visibilityFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}