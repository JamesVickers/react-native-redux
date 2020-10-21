import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';
import {setVisibilityFilter, VisibilityFilters} from '../types/actions';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

const TodosFilter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Text>Filter todos:</Text>
      <View>
        <TouchableOpacity
          onPress={() => dispatch(setVisibilityFilter(SHOW_ALL))}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setVisibilityFilter(SHOW_ACTIVE))}>
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setVisibilityFilter(SHOW_COMPLETED))}>
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TodosFilter;
