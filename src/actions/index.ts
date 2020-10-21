import {Todo} from '../types/todo'
import {AppActions, ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER} from '../types/actions'

let nextTodoId = 0;

export const addTodo = (todo: Todo): AppActions => ({
    type: ADD_TODO,
    todo
});

export const toggleTodo = (id: number): AppActions => ({
    type: TOGGLE_TODO,
    id
});

export const removeTodo = (id: number): AppActions => ({
    type: REMOVE_TODO,
    id,
});

export const setVisibilityFilter = (filter: string): AppActions => ({
    type: SET_VISIBILITY_FILTER,
    filter,
});

  