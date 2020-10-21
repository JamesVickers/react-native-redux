import {Todo} from './todo'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};


export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  id: number;
}

export interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
export type VisibilityFilterActionTypes = SetVisibilityFilterAction;

export type AppActions = TodoActionTypes | VisibilityFilterActionTypes;
